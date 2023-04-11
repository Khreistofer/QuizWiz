<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylesheet.css">
    <title>QuizWiz : Choose difficulty</title>
</head>
<?php session_start() ?>

<body>
    <div class="container">
        <div id="end" class="flex-center flex-column">
            <h3>Choose A Difficulty : </h3>
            <form action="/" method="GET" name = "diff_form">
                <input type = "submit" class="btn" value="easy" name = "diff"><br>
                <input type = "submit" class="btn" value="medium" name = "diff"><br>
                <input type = "submit" class="btn" value="hard" name = "diff"><br>
                <input type = "submit" class="btn" value = "Go Home" name = "diff">
                <br>
            </form>
            <p id="tip"><strong>P.S:</strong> Choosing higher difficulty raises you higher in ranks<br> while losing in easy difficulty reducts more of your score </p>
        </div>
    </div>
    <script> document.diff_form.action = sessionStorage.getItem("view");</script>
</body>
</html>