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
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <title>QuizWiz</title>
</head>

<header>
    <div class="topnav">
        <a href="/" style="float:left; margin-left:3%; font-size:20px;"><b>QUIZ<span style="color:#fc00ff;">WIZ</span></b></a>
        <a href="profile"><b>Profile</b></a>
        <a href="leaderboard"><b>Leaderboard</b></a>
        <a href="contact"><b>Contact</b></a>
        <a href="signUp"><b>Register</b></a>
        <a class="active" href="home"><b>Home</b></a>
      </div>
</header> 

<body>
    <div class="main-container" style="background-image: url('images/bg-01.jpg');"> 

        <?php 
            use Illuminate\Support\Facades\Cookie;
            // setcookie('user', 1, time() + (86400 * 365)); // 86400 = 1 day.
            // echo $_COOKIE['user'];
            
            ?>
        <div class="flex-container">
            <div class="category-container">
                <img src="images/sports.jpg" alt="." class="img-category">
                <h1 style="position:absolute; top:10%; left:10%; color:white;">SPORTS</h1>
                <h2 style="position:absolute; top:30%; left:10%; color:white;">Discover your knowladge in sports!</h2>
                <button type="button" class="button-20" style="position:absolute; top:80%; left:42%;" onclick="openPopup()">GO</button>
            </div>

            <div class="popup" id="popup">
                <a type="button" class="button-20" style="margin-left: 2vh;" onclick="closePopup()">x</a>
                <a onclick="setTeam()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Teams</a>
                <a onclick="setPlayer()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Players</a>
                <a onclick="setSportGeneral()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">General</a>
            </div>
            
            <script>
                function setTeam(){
                    sessionStorage.setItem("genre", "Teams");
                    sessionStorage.setItem("view", "quiz");
                }
                function setPlayer(){
                    sessionStorage.setItem("genre", "Players");
                    sessionStorage.setItem("view", "quiz");
                }
                function setSportGeneral(){
                    sessionStorage.setItem("genre", "SportGeneral");
                    sessionStorage.setItem("view", "quiz");
                }

                let popup = document.getElementById("popup");
                function openPopup(){
                    
                    popup.classList.remove("close-popup-animation");
                    popup.classList.add("open-popup");
                    
                }
                function closePopup(){
                    popup.classList.add("close-popup-animation");
                    
                }
            </script>

            <div class="category-container">
                <img src="images/science.jfif" alt="." class="img-category">
                <h1 style="position:absolute; top:10%; left:10%;color:white;">SCIENCE</h1>
                <h2 style="position:absolute; top:30%; left:10%;color:white;">Discover your knowladge in science!</h2>
                <button type="button" class="button-20" style="position:absolute; top:80%; left:42%;" onclick="openPopup2()">GO</button>
            </div>

            <div class="popup2" id="popup2">
                <a type="button" class="button-20" style="margin-left: 2vh;" onclick="closePopup2()">x</a>
                <a onclick="setMath()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Math</a>
                <a onclick="setPhysics()"href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Physics</a>
                <a onclick="setChemistry()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Chemistry</a>
            </div>

            <script>

                function setMath(){
                    sessionStorage.setItem("genre", "Math");
                    sessionStorage.setItem("view", "quiz");
                }
                function setPhysics(){
                    sessionStorage.setItem("genre", "Physics");
                    sessionStorage.setItem("view", "quiz");
                }
                function setChemistry(){
                    sessionStorage.setItem("genre", "Chemistry");
                    sessionStorage.setItem("view", "quiz");
                }

                let popup2 = document.getElementById("popup2");
                function openPopup2(){
                    
                    popup2.classList.remove("close-popup2-animation");
                    popup2.classList.add("open-popup2");
                }
                function closePopup2(){
                    popup2.classList.add("close-popup2-animation");
                    //popup.classList.remove("close-popup-animation");
                    
                }
            </script>

            <div class="category-container">
                <img src="images/geography.jpg" alt="." class="img-category">
                <h1 style="position:absolute; top:10%; left:10%;color:white;">GEOGRAPHY</h1>
                <h2 style="position:absolute; top:30%; left:10%;color:white;">Discover your knowladge in geography!</h2>
                <button type="button" class="button-20" style="position:absolute; top:80%; left:42%;" onclick="openPopup3()">GO</button>
            </div>

            <div class="popup3" id="popup3">
                <a type="button" class="button-20" style="margin-left: 2vh;" onclick="closePopup3()">x</a>
                <a onclick="setFlags()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">Flags</a>
                <a onclick="setGeoGeneral()" href="difficulty" type="button" class="button-20" style="margin:2vh 0 0 2vh">General</a>
                {{-- <button type="button" class="button-20" style="margin:2vh 0 0 2vh">Basketball</button> --}}
            </div>

            <script>

                function setFlags(){
                    sessionStorage.setItem("genre", "Flags");
                    sessionStorage.setItem("view", "guessFlag");
                }
                function setGeoGeneral(){
                    sessionStorage.setItem("genre", "GeoGeneral");
                    sessionStorage.setItem("view", "quiz");
                }

                let popup3 = document.getElementById("popup3");
                function openPopup3(){
                    
                    popup3.classList.remove("close-popup3-animation");
                    popup3.classList.add("open-popup3");
                }
                function closePopup3(){
                    popup3.classList.add("close-popup3-animation");
                    //popup.classList.remove("close-popup-animation");
                    
                }
            </script>

            <div class="category-container" style="background: -webkit-linear-gradient(right, #fc00ff, #00dbde);">
                <img src="images/minigames.png" alt="." class="img-category">
                <h1 style="position:absolute; top:10%; left:10%;color:white;">MINIGAMES</h1>
                <h2 style="position:absolute; top:30%; left:10%;color:white;">Spice it up!</h2>
                <button type="button" class="button-20" style="position:absolute; top:80%; left:42%;" onclick="openPopup4()">GO</button>
            </div>

            <div class="popup4" id="popup4">
                <a type="button" class="button-20" style="margin-left: 2vh;" onclick="closePopup4()">x</a>
                <a href="wordle" class="button-20" style="margin:2vh 0 0 2vh">Wordle</a>
                <a href="scramble" class="button-20" style="margin:2vh 0 0 2vh">Word Scramble</a>
                <a href="memory" class="button-20" style="margin:2vh 0 0 2vh">Memory Game</a>
            </div>

            <script>
                let popup4 = document.getElementById("popup4");
                function openPopup4(){
                    popup4.classList.remove("close-popup4-animation");
                    popup4.classList.add("open-popup4");
                }
                function closePopup4(){
                    popup4.classList.add("close-popup4-animation");                    
                }
            </script>

        </div>
    </div>
</body>
</html>