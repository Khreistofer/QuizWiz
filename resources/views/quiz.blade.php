<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/stylesheet.css">
    <title>QuizWiz: Quiz</title>
</head>

<body>
    <div class="container" style="transform:scale(70%, 70%);">
        <div id="game" class="justify-center flex-column">
            <div id="img"></div>
            <div id="hud">
                <div id="hud-item">
                    <p class="hud-prefix">
                        Question
                    </p>
                    <h1 class="hud-main-text" id="questionCounter">
                        
                    </h1>
                </div>
                <div id="timer">
                </div>
                <div id="hud-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            
            <h2 id="question">Sample Question What is your name?</h2>
            <div class="questions-container">
                <div class="choice-container">
                    <p class="choice-prefix">A</p>
                    <p class="choice" data-number="1">First Choice</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">B</p>
                    <p class="choice" data-number="2">Second Choice</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">C</p>
                    <p class="choice" data-number="3">Third Choice</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">D</p>
                    <p class="choice" data-number="4">Fourth Choice</p>
                </div>
            </div>
        </div>
    </div>
    
    <?php 
        if(isset($_GET['diff']))
        {
            session_start();
            $diff = $_GET['diff'];
            $_SESSION['diff'] = $diff;
        }
    ?>
    <script>let d = '<?php echo $diff ?>'</script>
    
    <script src="js/script.js"></script>
    <script> let g = sessionStorage.getItem("genre"); </script>
    <script>startGame(g, d)</script>
</body>



</html>