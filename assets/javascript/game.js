var winsCount = 0;
var lossCount = 0;
var score = 0;
var clicks = 0;
var targetNum = Math.floor(Math.random() * 101) + 19;



function resetGame() {
    var winsCount = 0;
    var lossCount = 0;
    var score = 0;
    var targetNum = Math.floor(Math.random() * 101) + 19;
    $('#score').html(score);
    var blueGem = Math.floor(Math.random() * 11) + 1;
    var greenGem = Math.floor(Math.random() * 11) + 1;
    var redGem = Math.floor(Math.random() * 11) + 1;
    var yellowGem = Math.floor(Math.random() * 11) + 1;
}

function win() {
    alert('We have a winner!');
    winsCount++;
    $('#winsCount').html(winsCount);
    resetGame();
}

function loss() {
    alert('We have a LOSER!');
    lossCount++
    $('#lossCount').html(lossCount);
    resetGame();
}

var blueGem = Math.floor(Math.random() * 11) + 1;
var greenGem = Math.floor(Math.random() * 11) + 1;
var redGem = Math.floor(Math.random() * 11) + 1;
var yellowGem = Math.floor(Math.random() * 11) + 1;

//Update divs
$(document).ready(function () {
    $('#targetNum').html(targetNum);
    $('#winsCount').html(winsCount);
    $('#lossCount').html(lossCount);
    $('#score').html(score);


    $('#blueGem').on('click', function () {
        clicks = clicks + blueGem;

        $('#score').html(clicks);

        if (score == targetNum) {
            win();
        }
        else if (clicks > targetNum) {
            loss();
        }
    });

    $('#greenGem').on('click', function () {
        clicks = clicks + greenGem;

        $('#score').html(clicks);

        if (score == targetNum) {
            win();
        }
        else if (clicks > targetNum) {
            loss();
        }
    });

    $('#redGem').on('click', function () {
        clicks = clicks + redGem;

        $('#score').html(clicks);

        if (score == targetNum) {
            win();
        }
        else if (clicks > targetNum) {
            loss();
        }
    });

    $('#yellowGem').on('click', function () {
        clicks = clicks + yellowGem;

        $('#score').html(clicks);

        if (score == targetNum) {
            win();
        }
        else if (clicks > targetNum) {
            loss();
        }
    });
});