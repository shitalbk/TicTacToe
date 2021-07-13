
var body = document.getElementById('body');
body.style.cssText = "margin-left:550px ; margin-top:50px;";
var tictac = document.getElementById('game');
tictac.style.cssText = "font-family:Arial;";

var button = [];
var but = ['but1','but2','but3','but4','but5','but6','but7','but8','but9'];

for(var i=0;i<9;i++)
{
  // CREATE A BUTTON
   button[i] = document.createElement("button");
   button[i].setAttribute('id', but[i]);
   // BUTTON STYLING
  button[i].style.cssText = "border-radius:6px; height:100px; width:100px; background:cyan; ";
  // APPEND SOMEWHERE
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button[i]);
  // GOTO NEWLINE
  if(i==2 || i==5)
  document.write("<br/>");
}
  
   function playerOne()
   {
    var playerOne = 1;
      var butOne = document.getElementById('but1');
      butOne.addEventListener("click", function set() {
        if(butOne.innerHTML == ''  && playerOne == 1){
          butOne.innerHTML = 'X'; 
          playerOne = 0;
        }
      });
    var butTwo = document.getElementById('but2');
    butTwo.addEventListener("click", function set() {
      if(butTwo.innerHTML == '' && playerOne == 1){
        butTwo.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butThree = document.getElementById('but3');
    butThree.addEventListener("click", function set() {
      if(butThree.innerHTML == '' && playerOne == 1){
        butThree.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butFour = document.getElementById('but4');
    butFour.addEventListener("click", function set() {
      if(butFour.innerHTML == '' && playerOne == 1){
        butFour.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butFive = document.getElementById('but5');
    butFive.addEventListener("click", function set() {
      if(butFive.innerHTML == '' && playerOne == 1){
        butFive.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butSix = document.getElementById('but6');
    butSix.addEventListener("click", function set() {
      if(butSix.innerHTML == '' && playerOne == 1){
        butSix.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butSeven = document.getElementById('but7');
    butSeven.addEventListener("click", function set() {
      if(butSeven.innerHTML == '' && playerOne == 1){
        butSeven.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butEight = document.getElementById('but8');
    butEight.addEventListener("click", function set() {
      if(butEight.innerHTML == '' && playerOne == 1){
        butEight.innerHTML = 'X';
        playerOne = 0;
      }
    });
    var butNine = document.getElementById('but9');
    butNine.addEventListener("click", function set() {
      if(butNine.innerHTML == '' && playerOne == 1){
        butNine.innerHTML = 'X';
        playerOne = 0;
      }
    }); 
   }

   function playerTwo()
   {
    var playerTwo = 0;
      var butOne1 = document.getElementById('but1');
      butOne1.addEventListener("click", function set() {
        if(butOne1.innerHTML == ''  && playerTwo == 0){
          butOne1.innerHTML = 'O'; 
          playerTwo = 1;
        }
      });
    var butTwo2 = document.getElementById('but2');
    butTwo2.addEventListener("click", function set() {
      if(butTwo2.innerHTML == '' && playerTwo == 0){
        butTwo2.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butThree3 = document.getElementById('but3');
    butThree3.addEventListener("click", function set() {
      if(butThree3.innerHTML == '' && playerTwo == 0){
        butThree3.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butFour4 = document.getElementById('but4');
    butFour4.addEventListener("click", function set() {
      if(butFour4.innerHTML == '' && playerTwo == 0){
        butFour4.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butFive5 = document.getElementById('but5');
    butFive5.addEventListener("click", function set() {
      if(butFive5.innerHTML == '' && playerTwo == 0){
        butFive5.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butSix6 = document.getElementById('but6');
    butSix6.addEventListener("click", function set() {
      if(butSix6.innerHTML == '' && playerTwo == 0){
        butSix6.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butSeven7 = document.getElementById('but7');
    butSeven7.addEventListener("click", function set() {
      if(butSeven7.innerHTML == '' && playerTwo == 0){
        butSeven7.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butEight8= document.getElementById('but8');
    butEight8.addEventListener("click", function set() {
      if(butEight8.innerHTML == '' && playerTwo == 0){
        butEight8.innerHTML = 'O';
        playerTwo = 1;
      }
    });
    var butNine9 = document.getElementById('but9');
    butNine9.addEventListener("click", function set() {
      if(butNine9.innerHTML == '' && playerTwo == 0){
        butNine9.innerHTML = 'O';
        playerTwo = 1;
      }
    }); 
   }
  
   var player = 'X';
   function player_turn(){
     for(var i=0;i<9;i++)
     {
       if(player == 'X')
       {
         playerOne();
         player = 'O';
       }
       else{
         playerTwo();
         player = 'X';
       }
     }
   }
   player_turn();

   function check_winner(){

   }
   
  
 

  

  
  












