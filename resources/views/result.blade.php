<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylesheet.css">
    <title>QuizWiz : Your Result</title>
</head>
<?php 
    session_start();
    $diff = $_SESSION['diff'];
    if($diff == 'easy')
        $mult = 1;
    else if ($diff == 'medium')
        $mult = 1.5;
    else
        $mult = 2;
    
    $bonus = $_GET['result']-50;
    //negative bonus
    if($bonus<0)
    {
        if($diff == 'easy')
        $mult = 2;
    else if ($diff == 'medium')
        $mult = 1.5;
    else
        $mult = 1;
    }
    $bonus*=$mult;
    $_SESSION['score'] = $bonus;
    session()->put('score', $bonus);
?>

<body>
    <div class="container">
        <div id="end" class="flex-center flex-column">
            <h1 id="finalScore"><script>var urlParams = new URLSearchParams(window.location.search);
                score = urlParams.get('result');
                const scoreText = document.getElementById('finalScore');
                scoreText.innerHTML = score;</script></h1>
            <a href="quiz?diff=<?php echo $diff;?>" class="btn">Play Again</a>
            <a href="/end" class="btn">Go Home</a>
        </div>
    </div>
</body>
</html>