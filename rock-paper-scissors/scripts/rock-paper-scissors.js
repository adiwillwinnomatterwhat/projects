document.querySelector('.js-result').innerHTML = 'Pick a move';

      

      let score = JSON.parse(localStorage.getItem('score')) || {
          win: 0,
          loss: 0,
          tie: 0
        }

         updateScore();

        

         

        

      
      function playGame(playerMove){
        const computerMove = pickCompputerMove();

          let result = '';
          if (playerMove === 'scissors'){
              if (computerMove === 'rock') {
                result = 'You lose.';
              } else if (computerMove === 'paper') {
                result = 'You win.';
              } else if (computerMove === 'scissors') {
                result = 'Tie.';
              }
          } else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                  result = 'You win.';
                } else if (computerMove === 'paper') {
                  result = 'Tie.';
                } else if (computerMove === 'scissors') {
                  result = 'You lose.';
                }
          } else if (playerMove === 'rock') {
              if (computerMove === 'rock') {
                result = 'Tie.';
              } else if (computerMove === 'paper') {
                result = 'You lose.';
              } else if(computerMove === 'scissors') {
                result = 'You win.';
              }
          }

            if(result === 'You win.') {
              score.win ++;
            } else if(result === 'You lose.') {
              score.loss ++;
            } else if(result === 'Tie.') {
              score.tie ++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore ();
            
            document.querySelector('.js-result').innerHTML = result;         
            document.querySelector('.js-moves').innerHTML = `You <im  g src = "${playerMove}-emoji.png" class="output-moves">   <img src = "${computerMove}-emoji.png" class="output-moves"> Computer`;
          /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Win: ${score.win} loss: ${score.loss} tie: ${score.tie}`); */

         
      }

          function updateScore() {
             document.querySelector('.js-score').innerHTML = `Win: ${score.win} loss: ${score.loss} tie: ${score.tie}`;
           }


      function pickCompputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

          if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
          }

          return computerMove;
      }
      