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
    <div class="topnav" style="position: absolute; top:0%; left:0%; width:100%;">
        <a href="/" style="float:left; margin-left:3%; font-size:20px;"><b>QUIZ<span style="color:#fc00ff;">WIZ</span></b></a>
        <a  href="profile"><b>Profile</b></a>
        <a class="active" href="leaderboard"><b>Leaderboard</b></a>
        <a href="contact"><b>Contact</b></a>
        <a href="signIn"><b>Register</b></a>
        <a href="home"><b>Home</b></a>

      </div>
</header> 
<style>
    html{
        background-size: auto;
        overflow-y: scroll;
        height: auto;
        
    }
    body{
        height: auto;
        align-items: center;
        justify-content: center;
        color: black;
        margin-top: 10%;
        background-repeat: repeat-y;
        background-size: auto;

    }
    h3{
        display: inline;
    }  
    .icon{
        height: 20px;
        width: 20px;
    }
</style>

    <body class="main-container" style="background-image: url('images/bg-01.jpg');">
        <h1 style="color:gold;">Rankings</h1><br><br>
        <?php
            $i=1;
            foreach ($data as $entry) {
                echo "<div>";
                if($i==1)
                    echo "<img class='icon' src='images/icons/trophy.png'>"." ";
                else if($i==2)
                    echo "<img class='icon' src='images/icons/silver-cup.png'>"." ";
                else if($i==3)
                    echo "<img class='icon' src='images/icons/bronze-cup.png'>"." ";
                else
                    echo "<b><span style='color:white;'>$i: </span></b>";
                echo "<h3>" . $entry->full_name." ";
                echo  $entry->rating . "<br><br></h3>";
                echo "</div>";
                $i+=1;
            }
        ?>
    </body>
</html>