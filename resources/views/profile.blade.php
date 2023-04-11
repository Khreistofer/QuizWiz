<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <!--===============================================================================================-->	
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <!--==============================================================================================-->	
        <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
    

        <link rel="stylesheet" type="text/css" href="css/util.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
    <title>Profile</title>
</head>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<header>
    <div class="topnav">
        <a href="/" style="float:left; margin-left:3%; font-size:20px;"><b>QUIZ<span style="color:#fc00ff;">WIZ</span></b></a>
        <a class="active" href="profile"><b>Profile</b></a>
        <a href="leaderboard"><b>Leaderboard</b></a>
        <a href="contact"><b>Contact</b></a>
        <a href="signIn"><b>Register</b></a>
        <a  href="home"><b>Home</b></a>
      </div>
</header> 


<body class="main-container" style="background-image: url('images/bg-01.jpg');">

    <div class="profile-container">
        <?php
                use Illuminate\Support\Facades\DB;
                use Illuminate\Http\Request;
                $id = session()->get('user');
                $result = DB::select("select * from accounts where id = ".$id);
                $name = $result[0]->full_name;
                $username = $result[0]->username;
                $rating = $result[0]->rating;

                echo "<h1 style='color:rgb(255, 0, 212);'>Name</h1>";
                echo "<h1>$name</h1>";
                echo "<h1 style='color:rgb(255, 0, 212);;'>Email</h1>";
                echo "<h1>$username</h1>";
                echo "<h1 style='color:rgb(255, 0, 212);;'>Rating</h1>";
                echo "<h1>$rating</h1>";
            ?>
        <div style="display:flex; flex-direction:row; margin:auto;">
            <form action="/logOut" method="get">
                <input type="submit" class="button-20" style="background-color:black;" value="LogOut"></input>
            </form>
            <form action="/deleteAccount" method="get">
                <input type="submit" class="button-20" style="background-color:red;" value="Delete Account"></input>
            </form>
        </div>
    </div>
</body>
</html>
