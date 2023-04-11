<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylesheet.css">
    <title>QuizWiz : Guess The Flag</title>
</head>
<body>
    <div class="container">
        <div id="game" class="justify-center flex-column">
            <div class="img"></div>
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
            
            <h2 id="question" style="text-align: center;">Country name</h2>
            <div style="display: flex; flex-direction: row;">
                <div class="choice-container">
                    <p class="choice" data-number="1" style="display: flex; align-items: center; justify-content: center;"></p>
                </div>
                <div class="choice-container">
                    <p class="choice" data-number="2" style="display: flex; align-items: center; justify-content: center;"></p>
                </div>
            </div>
            <div style="display: flex; flex-direction: row;">
                <div class="choice-container">
                    <p class="choice" data-number="3" style="display: flex; align-items: center; justify-content: center;"></p>
                </div>
                <div class="choice-container">
                    <p class="choice" data-number="4" style="display: flex; align-items: center; justify-content: center;"></p>
                </div>
            </div>
        </div>
    </div>
    <script src="js/guessflag.js"></script>
</body>
</html>