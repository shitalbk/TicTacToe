
var body = document.getElementById('body');
body.style.cssText = "margin-left:475px ; margin-top:50px; margin-right:500px";
var tictac = document.getElementById('game');
tictac.style.cssText = "margin-right:50px;padding-left:20px;padding-bottom:10px;border-radius:10px;font-size:30px;font-family:Arial;color:#c0e2e2;background-color:#4c0409; padding-top:10px";

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
          check_winner();
          playerOne = 0;  
        }
      });
     butTwo.addEventListener("click", function set() {
      if(butTwo.innerHTML == '' && playerOne == 1){
        butTwo.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butThree.addEventListener("click", function set() {
      if(butThree.innerHTML == '' && playerOne == 1){
        butThree.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butFour.addEventListener("click", function set() {
      if(butFour.innerHTML == '' && playerOne == 1){
        butFour.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      } 
    });
    butFive.addEventListener("click", function set() {
      if(butFive.innerHTML == '' && playerOne == 1){
        butFive.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butSix.addEventListener("click", function set() {
      if(butSix.innerHTML == '' && playerOne == 1){
        butSix.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butSeven.addEventListener("click", function set() {
      if(butSeven.innerHTML == '' && playerOne == 1){
        butSeven.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butEight.addEventListener("click", function set() {
      if(butEight.innerHTML == '' && playerOne == 1){
        butEight.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });
    butNine.addEventListener("click", function set() {
      if(butNine.innerHTML == '' && playerOne == 1){
        butNine.innerHTML = 'X';
        check_winner();
        playerOne = 0;
      }
    });  
    function check_winner(){
          if(butOne.innerHTML === "X" && butTwo.innerHTML === "X"  && butThree.innerHTML === "X"){
            alert("X is a Winner");
          } 
          else if(butOne.innerHTML === "X" && butFour.innerHTML === "X" && butSeven.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butOne.innerHTML === "X" && butFive.innerHTML === "X" && butNine.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butTwo.innerHTML === "X" && butFive.innerHTML === "X" && butEight.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butThree.innerHTML === "X" && butFive.innerHTML === "X" && butSeven.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butThree.innerHTML === "X" && butSix.innerHTML === "X" && butNine.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butFour.innerHTML === "X" && butFive.innerHTML === "X" && butSix.innerHTML === "X"){
            alert("X is a Winner");
          }
          else if(butSeven.innerHTML === "X" && butEight.innerHTML === "X" && butNine.innerHTML === "X"){
            alert("X is a Winner");
          }  
     }
   }

   function playerTwo()
   {
    var playerTwo = 0;
    butOne.addEventListener("click", function set() {
        if(butOne.innerHTML == ''  && playerTwo == 0){
          butOne.innerHTML = 'O';
          check_winner();
          playerTwo = 1;
        }
      });
    butTwo.addEventListener("click", function set() {
      if(butTwo.innerHTML == '' && playerTwo == 0){
        butTwo.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butThree.addEventListener("click", function set() {
      if(butThree.innerHTML == '' && playerTwo == 0){
        butThree.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butFour.addEventListener("click", function set() {
      if(butFour.innerHTML == '' && playerTwo == 0){
        butFour.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butFive.addEventListener("click", function set() {
      if(butFive.innerHTML == '' && playerTwo == 0){
        butFive.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butSix.addEventListener("click", function set() {
      if(butSix.innerHTML == '' && playerTwo == 0){
        butSix.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butSeven.addEventListener("click", function set() {
      if(butSeven.innerHTML == '' && playerTwo == 0){
        butSeven.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butEight.addEventListener("click", function set() {
      if(butEight.innerHTML == '' && playerTwo == 0){
        butEight.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    });
    butNine.addEventListener("click", function set() {
      if(butNine.innerHTML == '' && playerTwo == 0){
        butNine.innerHTML = 'O';
        check_winner();
        playerTwo = 1;
      }
    }); 
    function check_winner(){  
          if(butOne.innerHTML === "O" && butTwo.innerHTML === "O"  && butThree.innerHTML === "O"){
            alert("O is a Winner");
          } 
          else if(butOne.innerHTML === "O" && butFour.innerHTML === "O" && butSeven.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butOne.innerHTML === "O" && butFive.innerHTML === "O" && butNine.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butTwo.innerHTML === "O" && butFive.innerHTML === "O" && butEight.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butThree.innerHTML === "O" && butFive.innerHTML === "O" && butSeven.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butThree.innerHTML === "O" && butSix.innerHTML === "O" && butNine.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butFour.innerHTML === "O" && butFive.innerHTML === "O" && butSix.innerHTML === "O"){
            alert("O is a Winner");
          }
          else if(butSeven.innerHTML === "O" && butEight.innerHTML === "O" && butNine.innerHTML === "O"){
            alert("O is a Winner");
          }   
     }
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
   
   

   
   
   
  
 

  

  
  












