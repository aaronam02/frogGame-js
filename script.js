/* global keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

let backgroundColor,
  frogX,
  frogY,
  frogV,
  score,
  lives,
  gameIsOver,
  car1X,
  car1Y,
  car1V,
  car2X,
  car2Y,
  car2V,
  car3X,
  car3Y,
  car3V,
  car4X,
  car4Y,
  car4V,
  car5X,
  car5Y,
  car5V,
  hit;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500); // defines the canvas 500 x 500
  colorMode(HSB, 360, 100, 100); // ?
  backgroundColor = 95; // ?

  setupFrog();

  score = 0;
  lives = 3;
  gameIsOver = false;
  car1X = 0;
  car1Y = 100;
  car1V = 11;
  car2X = 0;
  car2Y = 170;
  car2V = 3;
  car3X = 0;
  car3Y = 240;
  car3V = 7;
  car4X = 0;
  car4Y = 310;
  car4V = 11;
  car5X = 0;
  car5Y = 400;
  car5V = 5;
}

function setupFrog() {
  frogX = width / 2;
  frogY = 450;
  frogV = 10;
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20);
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
}

function keyPressed() {
  if (gameIsOver) {
    return;
  }
  
  if (keyCode === UP_ARROW) {
    frogY -= frogV;
  } else if (keyCode === DOWN_ARROW) {
    frogY += frogV;
  } else if (keyCode === LEFT_ARROW) {
    frogX -= frogV;
  } else if (keyCode === RIGHT_ARROW) {
    frogX += frogV;
  }
}

function moveCars() {
  // Move the car
  car1X += car1V;
  car2X += car2V;
  car3X += car3V;
  car4X += car4V;
  car5X += car5V;

  // Reset if it moves off screen
  if (car1X > width) {
    car1X = -40;
  }
  // Reset if it moves off screen
  if (car2X > width) {
    car2X = -40;
  }
  if (car3X > width) {
    car3X = -40;
  }
  // Reset if it moves off screen
  if (car4X > width) {
    car4X = -40;
  }
    if (car5X > width) {
    car5X = -40;
  }
  
}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  rect(car1X, car1Y, 40, 30);
  // Code for additional cars
    rect(car2X, car2Y, 40, 30);
    // Code for additional cars
    rect(car3X, car3Y, 40, 30);
  rect(car4X, car4Y, 40, 30);
  rect(car5X, car5Y, 40, 30);


}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  if (collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20)) {
    setupFrog();
    lives--;
  }
  if (collideRectCircle(car2X, car2Y, 40, 30, frogX, frogY, 20)) {
    setupFrog();
    lives--;
  }
  if (collideRectCircle(car3X, car3Y, 40, 30, frogX, frogY, 20)) {
    setupFrog();
    lives--;
  }
  if (collideRectCircle(car4X, car4Y, 40, 30, frogX, frogY, 20)) {
    setupFrog();
    lives--;
  }
    if (collideRectCircle(car5X, car5Y, 40, 30, frogX, frogY, 20)) {
    setupFrog();
    lives--;
  }

  // if the frog has no more lives, game over
  if (lives === 0) {
    gameIsOver = true;
  }
}

function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if (frogY < 50) {
    score++;
    setupFrog();
  }
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`, 10, 40);
  
  // Display game over message if the game is over
  if (gameIsOver){
    textSize(42);
    text("GAME OVER!!!", 20, height/2);
  }  
}
