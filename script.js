
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
var butOne = document.getElementById('but1');
var butTwo = document.getElementById('but2');
var butThree = document.getElementById('but3');
var butFour = document.getElementById('but4');
var butFive = document.getElementById('but5');
var butSix = document.getElementById('but6');
var butSeven = document.getElementById('but7');
var butEight = document.getElementById('but8');
var butNine = document.getElementById('but9');

   function playerOne()
   {
    var playerOne = 1;
      butOne.addEventListener("click", function set() {
        if(butOne.innerHTML == ''  && playerOne == 1){
          butOne.innerHTML = 'X'; 
          var but_1 = butOne.innerHTML;
          console.log(but_1);
         // check_winner();
          playerOne = 0;  
        }
        check_winner();
      });
     butTwo.addEventListener("click", function set() {
      if(butTwo.innerHTML == '' && playerOne == 1){
        butTwo.innerHTML = 'X';
        var but_2 = butTwo.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butThree.addEventListener("click", function set() {
      if(butThree.innerHTML == '' && playerOne == 1){
        butThree.innerHTML = 'X';
        var but_3 = butThree.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butFour.addEventListener("click", function set() {
      if(butFour.innerHTML == '' && playerOne == 1){
        butFour.innerHTML = 'X';
        var but_4 = butFour.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butFive.addEventListener("click", function set() {
      if(butFive.innerHTML == '' && playerOne == 1){
        butFive.innerHTML = 'X';
        var but_5 = butFive.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butSix.addEventListener("click", function set() {
      if(butSix.innerHTML == '' && playerOne == 1){
        butSix.innerHTML = 'X';
        var but_6 = butSix.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butSeven.addEventListener("click", function set() {
      if(butSeven.innerHTML == '' && playerOne == 1){
        butSeven.innerHTML = 'X';
        var but_7 = butSeven.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butEight.addEventListener("click", function set() {
      if(butEight.innerHTML == '' && playerOne == 1){
        butEight.innerHTML = 'X';
        var but_8 = butEight.innerHTML;
        playerOne = 0;
      }
      check_winner();
    });
    butNine.addEventListener("click", function set() {
      if(butNine.innerHTML == '' && playerOne == 1){
        butNine.innerHTML = 'X';
        var but_9 = butNine.innerHTML;
        playerOne = 0;
      }
     check_winner();
    });   
    function check_winner(){
      if(butOne.innerHTML == butTwo.innerHTML && butTwo.innerHTML == butThree.innerHTML){
        alert("You are a Winner");
      } 
      /*
      else if(butOne.innerHTML == butFour.innerHTML && butFour.innerHTML == butSeven.innerHTML){
        alert("You are a Winner");
      }
      else if(butOne.innerHTML == butFive.innerHTML && butFive.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else if(butTwo.innerHTML == butFive.innerHTML && butFive.innerHTML == butEight.innerHTML){
        alert("You are a Winner");
      }
      else if(butThree.innerHTML == butFive.innerHTML && butFive.innerHTML == butSeven.innerHTML){
        alert("You are a Winner");
      }
      else if(butThree.innerHTML == butSix.innerHTML && butSix.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else if(butFour.innerHTML == butFive.innerHTML && butFive.innerHTML == butSix.innerHTML){
        alert("You are a Winner");
      }
      else if(butSeven.innerHTML == butEight.innerHTML && butEight.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else{
        alert("Game Draw");
      } */
     }
   }
   
   
   function playerTwo()
   {
    var playerTwo = 0;
    butOne.addEventListener("click", function set() {
        if(butOne.innerHTML == ''  && playerTwo == 0){
          butOne.innerHTML = 'O';
          playerTwo = 1;
        }
       // check_winner();
      });
    butTwo.addEventListener("click", function set() {
      if(butTwo.innerHTML == '' && playerTwo == 0){
        butTwo.innerHTML = 'O';
        playerTwo = 1;
      }
     // check_winner();
    });
    butThree.addEventListener("click", function set() {
      if(butThree.innerHTML == '' && playerTwo == 0){
        butThree.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    });
    butFour.addEventListener("click", function set() {
      if(butFour.innerHTML == '' && playerTwo == 0){
        butFour.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    });
    butFive.addEventListener("click", function set() {
      if(butFive.innerHTML == '' && playerTwo == 0){
        butFive.innerHTML = 'O';
        playerTwo = 1;
      }
     // check_winner();
    });
    butSix.addEventListener("click", function set() {
      if(butSix.innerHTML == '' && playerTwo == 0){
        butSix.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    });
    butSeven.addEventListener("click", function set() {
      if(butSeven.innerHTML == '' && playerTwo == 0){
        butSeven.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    });
    butEight.addEventListener("click", function set() {
      if(butEight.innerHTML == '' && playerTwo == 0){
        butEight.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    });
    butNine.addEventListener("click", function set() {
      if(butNine.innerHTML == '' && playerTwo == 0){
        butNine.innerHTML = 'O';
        playerTwo = 1;
      }
    //  check_winner();
    }); 
    /*
    function check_winner(){
      if(butOne.innerHTML == butTwo.innerHTML && butTwo.innerHTML == butThree.innerHTML){
        alert("You are a Winner");
      } 
      else if(butOne.innerHTML == butFour.innerHTML && butFour.innerHTML == butSeven.innerHTML){
        alert("You are a Winner");
      }
      else if(butOne.innerHTML == butFive.innerHTML && butFive.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else if(butTwo.innerHTML == butFive.innerHTML && butFive.innerHTML == butEight.innerHTML){
        alert("You are a Winner");
      }
      else if(butThree.innerHTML == butFive.innerHTML && butFive.innerHTML == butSeven.innerHTML){
        alert("You are a Winner");
      }
      else if(butThree.innerHTML == butSix.innerHTML && butSix.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else if(butFour.innerHTML == butFive.innerHTML && butFive.innerHTML == butSix.innerHTML){
        alert("You are a Winner");
      }
      else if(butSeven.innerHTML == butEight.innerHTML && butEight.innerHTML == butNine.innerHTML){
        alert("You are a Winner");
      }
      else{
        alert("Game Draw");
      }
     } */
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
 
   

   
   
   
  
 

  

  
  












