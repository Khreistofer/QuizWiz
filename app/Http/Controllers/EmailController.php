<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class EmailController extends Controller
{

    public function remember(){
        if(session()->has('user'))
            return view('home');
        else
            return view('index');
    }

    public function logIn(Request $req){
        $data = $req->input();
        $username = $data['username'];
        $password = $data['password'];
        $hashedPass = hash('sha256', $password);
        $result = DB::select("select * from accounts where username = '$username' and password = '$hashedPass'");
        if($result == null)
        {
            return redirect('signIn')->with('error', 'invalid username or password');
        }
        $userID = $result[0]->id;
        $name = $result[0]->full_name;
        cookie('user', $userID, time() + (86400 * 365)); // 86400 = 1 day.
        session()->put($_COOKIE['user'] , array($name, $username, 1000));
        session()->put('user', $userID);
        return view('home',['data'=>$result]);
    }

    function createAccount(Request $req){

        $data = $req->input();
        $username = $data['username'];
        $password = $data['password'];  
        $hashedPass = hash('sha256', $password);
        $name = $data['name'];
        $password2 = $data['password2'];

        $req->validate([            
            'username' => 'required|regex:/(.+)@(.+)\.(.+)/i',
            'password' => 'required|min:6'
          ]);
        
        if($password == $password2)
        {
            $res = DB::select("select * from accounts where username = '$username' and password = '$password'");
            if($res != null)
                return redirect('signUp')->with('unmatchedError', 'account already exists');
            DB::insert("insert into accounts(username, password, full_name, rating) values ('$username', '$hashedPass', '$name', 1000)");
            // session()->put('user', DB::select("select * from accounts where username = '$username' and password = '$hashedPass'"));
            $userID =  DB::select("select * from accounts where username = '$username' and password = '$hashedPass'");
            
            cookie('user', $userID[0]->id, time() + (86400 * 365)); // 86400 = 1 day.
            session()->put($_COOKIE['user'] , array($name, $username, 1000));
            session()->put('user', $userID[0]->id);
            return view('home');
        }
        else{
            return redirect('signUp')->with('unmatchedError', 'password is not matched');
        }
        
    }

    public function homeGetRequest(Request $req)
    {
        if(session()->has('user'))
            return view('home');
        else
            return redirect('signIn');
    }

    public function logOut()
    {
        session()->forget('user');
        return view('index');
    }

    public function deleteAccount()
    {
        DB::select('DELETE FROM accounts where id = '.session()->get('user'));
        session()->forget('user');
        return view('index');
    }

    public function updateRating(){
        session_start();
        // DB::query("UPDATE TABLE accounts SET rating = rating +" . session()->get('score')." WHERE accounts.id = ".session()->get('user'));
        $account = DB::table('accounts')->select('rating')->where('id', session()->get('user'))->first();
        if ($account)
            $rating = $account->rating;
        DB::table('accounts')->where('id', session()->get('user'))->increment('rating', session()->get('score') * 1000/$rating);
        return view('home');
    }
    
    public function setLeaderboard(){
        $result = DB::table('accounts')->orderByDesc('rating')->get();
        return view('leaderboard', ['data'=>$result]);
    }

}
?>