$(document).ready(function() {

    $("#btnSpin").on("click", function(){
        console.log("You have clicked the spin button!");

    const computerNum = Math.floor((Math.random() * 1000 ) - 1);
    let computerPick = $("#computerInput");
    computerPick.text(computerNum);

    const playerNum = Math.floor((Math.random() * 1000 ) - 1);
    let playerPick = $("#playerInput");
    playerPick.text(playerNum);
    },

// computer win and loss' counter = results from spin (random output)
    let computerWins = 0;
    let computerLoss = 0;

// player wins and loss' counter = results from spic (random output)
    let playerWins = 0;
    let playerLoss = 0;

// computer vs player score comparisons
function computerW(){
    computerWins++;
    $("#cWin").text(computerWins);
    $("#pLoss").text(playerLoss);
    console.log(computerWins)
}

function playerW(){
    playerWins++;
    $("#pWin").text(playerWins);
    $("#cLoss").text(computerLoss)
    console.log(playerWins)
}



})



// if (computerNum > playerNum) {
//         console.log("Computer win");
//     }

//     else if (computerNum < playerNum) {
//         console.log("Player Win");
//         playerWins++;
//         computerLoss++
//         $("#cWin").text(playerWins);
//         $("#pLoss").text(computerLoss);
//         console.log(playerWin);
//         console.log(computerLoss)
//     }
//     else {
//         console.log("User Tie");
//     }
// }