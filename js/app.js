/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /*
    When a button is clicke
 */


let game;

$("#btn__reset").on("click", function(){
    game = new Game();
    game.startGame();

});

$(".key").on("click", function(e){

    game.handleInteraction(e);

});