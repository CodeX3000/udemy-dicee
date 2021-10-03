 function play() {
   var playerOneScore = rollDice();
   var playerTwoScore = rollDice();

   if (playerOneScore > playerTwoScore) {
     populateHeading("🚩 Player 1 Wins!")
   } else if (playerOneScore < playerTwoScore) {
     populateHeading("Player 2 Wins! 🚩")
   } else {
     populateHeading("🚩 Tie 🚩")
   }

   populateImage(".img1", playerOneScore);
   populateImage(".img2", playerTwoScore);
 }

 function rollDice() {
   return Math.floor((Math.random() * 6) + 1);
 }

 function populateImage(img, score) {
   document.querySelector(img)
     .setAttribute("src", "images/dice" + score + ".png");
 }

 function populateHeading(text) {
   document.querySelector("h1").innerText = text;
 }

 function refreshPage() {
   window.location.reload();
 }
