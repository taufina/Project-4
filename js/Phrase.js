/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }

    // to add letter placeholders to the display when the game starts.  
    //each letter represented by an empty box.  one li element for each letter.
    addPhraseToDisplay(){

      let ul = document.querySelector('#phrase ul');
      ul.innerHTML = "";
      const splittingPhrase = this.phrase.split('');

      splittingPhrase.forEach(letter => {
        const liElement = document.createElement('li');
        ul.appendChild(liElement);
        if(letter===" "){
          // liElement.className = ("space");
          liElement.setAttribute("class", "space");
        } else {
          liElement.innerHTML = letter;
          // liElement.className = ("letter", `${letter}`);
          liElement.setAttribute("class", `hide letter ${letter}`);
        }
        //phraseId.appendChild(liElement);
      });   
    };

    // check to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter){
      if(this.phrase.indexOf(letter) > -1){
        return true;
      } else { return false;}
      
    };

    //reveal the letters on the board that matches the player's selection. 
    showMatchedLetter(letter){
      $(`.letter.${letter}`).removeClass('hide').addClass('show');

    };
  }
