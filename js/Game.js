/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
      this.missed = 0;
      this.phrases = [
          new Phrase('practice makes perfect'),
          new Phrase('Break a leg'),
          new Phrase('A piece of cake'),
          new Phrase('No pain no gain'), 
          new Phrase('see eye to eye')];

        // This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() 
        // method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
      this.activePhrase = null;
    }

    //this method randomly retrieves one of the phrases stored in the phrases 
    //array and returns it.
    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random()*(this.phrases.length));
        console.log(this.phrases[randomNumber]);
        return this.phrases[randomNumber];    
    };

    // hides the start screen overlay, calls the getRandomPhrase() method, and sets the active phrase property 
    //with the chosen phrase.  It also adds that phrase to the board by calling the addPhraseToDisplay() method 
    //on the active Phrase object.
    startGame(){
     // $("#overlay").fadeOut("slow");
      $("#overlay").hide();
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
      
    };

// this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter 
// in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
// Disable the selected letter’s onscreen keyboard button.
// If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button 
// and call the removeLife() method.
// If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call 
//the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, 
//also call the gameOver() method.
    handleInteraction(e){
      if (this.activePhrase.checkLetter(e.target.textContent)){
        this.activePhrase.showMatchedLetter(e.target.textContent);
      } else {
        this.removeLife();
      }

      this.checkForWin();

    };


    // removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with 
    //a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five 
    //missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.

    removeLife(){
      this.missed +=1;
      
      if(this.missed<=5){
        $( ".tries" )[0].remove();
      }
      
      if(this.missed===5){
        console.log("call game over");
        this.gameOver(false);
      }

    };

    // checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.

    checkForWin(){
      let lettersLeft = $(".hide");

      if (lettersLeft.length===0){
        this.gameOver(true);
      }else{this.gameOver(false)}

    };

    // gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, 
    //updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class 
    //with either the win or lose CSS class.

    //gameWon = true;
    gameOver(gameWon){
      
      $("#overlay").show();
      //$("#overlay").fadeIn("slow");

      console.log("game over called, game won: "+gameWon);
      if(gameWon){
        console.log("game won");
        $("#overlay h1").text("You Won");
        //$("#game-over-message").text("You win");
        $(".start").removeClass("lose").addClass("win");
      }else{
        console.log("game lost");
        $("#overlay h1").text("You lost");
        //$("#game-over-message").text("You lose");
        $(".start").removeClass("win").addClass("lose");

      }

    };
  }