<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylesheet.css">
    <title>QuizWIz: True Or False</title>
</head>
<body>
    <div class="container">
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
                    <p class="choice" data-number="1">True</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">B</p>
                    <p class="choice" data-number="2">False</p>
                </div>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
</html>