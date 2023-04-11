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
    <!--===============================================================================================-->
    <title>QuizWiz</title>
</head>

<header>
    {{-- <div class="topnav">QuizWiz</div> --}}
    <div class="topnav">
        <a href="#" style="float:left; margin-left:3%; font-size:20px;"><b>QUIZ<span style="color:#fc00ff;">WIZ</span></b></a>
        <a href="#about"><b>About</b></a>
        <a href="#contact"><b>Contact</b></a>
        <a href="signUp"><b>Register</b></a>
        <a href="home"><b>Home</b></a>
      </div>
</header> 

<body>
    <div class="container-login100" style="background-image: url('images/bg-01.jpg'); flex-direction:column;">
        <img src="images/appLogo.png" alt="logo" style="float:center;">
    

        <div class="container-login100-form-btn" style="margin-top: 5%;">
            <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <form action="/signIn">
                <button class="login100-form-btn" type="submit">
                    GET STARTED
                </button></form>
            </div>
        </div>

    </div>
</body>

{{-- <footer class="bg"></footer> --}}
</html>