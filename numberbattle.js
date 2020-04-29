
                $(document).ready(function () {
                    $("#btnSpin").on("click", function () {

                        let playWinTotal = 0;
                        let playLossTotal = 0;
                        let compWinTotal = 0;
                        let compLossTotal = 0;

                        /*RANDOM GENERATED NUMBER FOR THE COMPUTER SIDE*/
                        const computerNum = Math.floor((Math.random() * 1000) - 1);
                        let computerPick = $("#computerInput");
                        computerPick.text(computerNum);

                        /*RANDOM NUMBER GENERATED FOR THE PLAYER*/
                        const playerNum = Math.floor((Math.random() * 1000) - 1);
                        let playerPick = $("#playerInput");
                        playerPick.text(playerNum);

                        // CATCHING THE VALUES FOR EACH PLAYER
                        var playerN = playerNum;
                        var compN = computerNum;

                        // COMPARISON FOR THE PLAYER TOTALS
                        // player win
                        if(playerN > compN){
                            console.log(++playWinTotal);
                            console.log(++compLossTotal);
                            console.log(playWinTotal);
                            console.log(compLossTotal);
                            console.log('Player Wins');
                            console.log('Computer Loses')
                        // computer win
                        } else if (compN > playerN) {
                           console.log(++compWinTotal);
                           console.log(++playLossTotal);
                           console.log(compWinTotal);
                           console.log(playLossTotal)
                            console.log('Computer Wins');
                            console.log('Player Loses')
                        }
                         else {
                            console.log('Players tied')
                        }
                    })
                });