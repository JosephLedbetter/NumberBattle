
                    $("#btnSpin").on("click", function () {

                        /*RANDOM GENERATED NUMBER FOR THE COMPUTER SIDE*/
                        const computerNum = Math.floor((Math.random() * 1000) - 1);
                        let computerPick = $("#computerInput");
                        computerPick.text(computerNum);

                        /*RANDOM NUMBER GENERATED FOR THE PLAYER*/
                        const playerNum = Math.floor((Math.random() * 1000) - 1);
                        let playerPick = $("#playerInput");
                        playerPick.text(playerNum);

                        let playerScore = 0;
                        let compScore = 0;

                        // COMPARISON FOR THE PLAYER TOTALS
                        // player win
                        if(playerNum > computerNum){
                            console.log('Player Wins');
                            console.log('Computer Loses')
                           
                        }
                        // computer win
                        else if (computerNum > playerNum) {
                            console.log('Computer Wins');
                            console.log('Player Loses');
                           
                        }
                         else {
                            console.log('Players tied')
                        }
                    });