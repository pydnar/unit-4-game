var winsCount = 0;
var lossCount = 0;
var score = 0;
var targetNum = Math.floor(Math.random() * 101) + 19;

//Update divs
$(document).ready(function () {
    $("#targetNum").html(targetNum);
    $("#winsCount").html(winsCount);
    $("#lossCount").html(lossCount);
    $("#score").html(score);
})

function resetGame() {
    var winsCount = 0;
    var lossCount = 0;
    var score = 0;
    var targetNum = Math.floor(Math.random() * 101) + 19;
    $("#score").html(score);
}

function win() {
    alert("We have a winner!");
    winsCount++;
    $("#winsCount").html(winsCount);
    resetGame();
}

function loss() {
    alert("We have a LOSER!");
    lossCount++
    $("#lossCount").html(lossCount);
    resetGame();
}

var blueGem = Math.floor(Math.random() * 11) + 1;
var greenGem = Math.floor(Math.random() * 11) + 1;
var redGem = Math.floor(Math.random() * 11) + 1;
var yellowGem = Math.floor(Math.random() * 11) + 1;

$("#blueGem").on('Click', function () {
    score = score + blueGem;

    $("#score").text(score);

    if (score == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        loss();
    }
});

$("#greenGem").on('Click', function () {
    score = score + greenGem;

    $("#score").text(score);

    if (score == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        loss();
    }
});

$("#redGem").on('Click', function () {
    score = score + redGem;

    $("#score").text(score);

    if (score == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        loss();
    }
});

$("#yellowGem").on('Click', function () {
    score = score + yellowGem;

    $("#score").text(score);

    if (score == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        loss();
    }
});