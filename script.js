// JavaScript source code
let buttons = document.querySelectorAll(".buttons");
let turn = "X";
let winner = document.querySelector(".winner");
let winnerName = document.createElement("h1");
let playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play Again?";

let gameEnd = () => {
    if ((buttons[0].innerText != "" && buttons[1].innerText != "" && buttons[2].innerText != "" && buttons[0].innerText == buttons[1].innerText && buttons[1].innerText == buttons[2].innerText) || (buttons[3].innerText != "" && buttons[4].innerText != "" && buttons[5].innerText != "" && buttons[3].innerText == buttons[4].innerText && buttons[4].innerText == buttons[5].innerText) || (buttons[6].innerText != "" && buttons[7].innerText != "" && buttons[8].innerText != "" && buttons[6].innerText == buttons[7].innerText && buttons[7].innerText == buttons[8].innerText)) {
        turn = turn == "X" ? "O" : "X";
        winnerName.innerText = `${turn} won the Game`;
        winner.append(winnerName, playAgainButton);
    }
    else if ((buttons[0].innerText != "" && buttons[3].innerText != "" && buttons[6].innerText != "" && buttons[0].innerText == buttons[3].innerText && buttons[3].innerText == buttons[6].innerText) || (buttons[1].innerText != "" && buttons[4].innerText != "" && buttons[7].innerText != "" && buttons[1].innerText == buttons[4].innerText && buttons[4].innerText == buttons[7].innerText) || (buttons[2].innerText != "" && buttons[5].innerText != "" && buttons[8].innerText != "" && buttons[2].innerText == buttons[5].innerText && buttons[5].innerText == buttons[8].innerText)) {
        turn = turn == "X" ? "O" : "X";
        winnerName.innerText = `${turn} won the Game`;
        winner.append(winnerName,playAgainButton);
    }
    else if ((buttons[0].innerText != "" && buttons[4].innerText != "" && buttons[8].innerText != "" && buttons[0].innerText == buttons[4].innerText && buttons[4].innerText == buttons[8].innerText) || (buttons[2].innerText != "" && buttons[4].innerText != "" && buttons[6].innerText != "" && buttons[2].innerText == buttons[4].innerText && buttons[4].innerText == buttons[6].innerText)) {
        turn = turn == "X" ? "O" : "X";
        winnerName.innerText = `${turn} won the Game`;
        winner.append(winnerName,playAgainButton);
    }
    else if (buttons[0].innerText != "" && buttons[1].innerText != "" && buttons[2].innerText != "" && buttons[3].innerText != "" && buttons[4].innerText != "" && buttons[5].innerText != "" && buttons[6].innerText != "" && buttons[7].innerText != "" && buttons[8].innerText != "") {
        winnerName.innerText = `Its a Draw`;
        winner.append(winnerName,playAgainButton);
    }
}

let enterValue = (e) => {
    if (e.currentTarget.innerText == "") {
        e.currentTarget.innerText = turn;
        if (turn == "X") {
            turn = "O";
        }
        else {
            turn = "X";
        }
    }
}

let playAgain = () => {
    buttons.forEach((button) => {
        button.innerText = "";
    });
    winner.innerHTML = "";
}

playAgainButton.addEventListener("click", playAgain);

buttons.forEach((button) => {
    button.addEventListener("click", enterValue);
    button.addEventListener("click", gameEnd);
});
