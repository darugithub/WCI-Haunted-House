let introBackground;
let gameBackground;
let lightBulb;
let introText;
let flickerColor = false;
let clickStart = false;
let backgroundColor = false;
let showText = true;
let gameMusic;
let keyboard;
let ghostMove = 0;
let f = 0;
let thor;
let ghost;
let questions;
let heart1 = true;
let heart2 = true;
let heart3 = true;
let time = 0;
let thorClicked = false; // this to go to the game 
let hallway;
const ARROW_RIGHT = 39;
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
let x = 0;
let y = 0;
let blankSquareSize = 450; // Adjust the size of the blank square
let showSquare = false; // flag to control when to show the blank square
let showChooseText = false;
let showSquare2 = false;
let showChooseText2 = false;
let showSquare3 = false;
let showChooseText3 = false;
let showSquare4 = false;
let showChooseText4 = false;
let ghostStartTime;
let ghost2;
let gameOver = false;
let gameWin = false;
let optionAFill = 0;
let optionBFill = 0;
let optionCFill = 0;
let optionAFill2 = 0;
let optionBFill2 = 0;
let optionCFill2 = 0;        
let optionAFill3 = 0;
let optionBFill3 = 0;
let optionCFill3 = 0;
let optionAFill4 = 0;
let optionBFill4 = 0;
let optionCFill4 = 0;
let redAnswers = 0;
let correctAnswers = 0;
let showName = true;
let startTime;
let gameTime = 60000; // 60 seconds = 60,000 milliseconds
let gameIsOver = false;




function preload () {
  introBackground = loadImage('IMG-20231019-WA0002.jpg');
  lightBulb = loadImage("Screenshot_2023-10-19_223312-removebg-preview.png");
  introText = loadFont("Nosifer-Regular.ttf");
  clickStart = loadFont("HindSiliguri-Bold.ttf");
   questions = loadFont("Raleway-VariableFont_wght.ttf")
  keyboard = loadImage("pngtree-keyboard-stereo-shadow-arrow-keys-png-image_4373122-removebg-preview.png");
  thor = loadImage("viking thor.png")
  ghost = loadImage("ghost for the game.png")
  gameBackground = loadImage("new background for game 2.jpg");
  heart1 = loadImage("pngwing.com (7).png")
  heart2 = loadImage("pngwing.com (7).png")
  heart3 = loadImage("pngwing.com (7).png")
 
  // hallway = loadImage("spooky hallway background.jpg")
    
 // ask the teacher on how to add audio files to the game
}

function setup()  {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); image(introBackground,width/2,height/2,width,height);
  textAlign(CENTER);
  textFont(clickStart, 40);
  frameRate(2);
  // ghostStartTime = millis() + 15000;
// ask teacher how to make the ghost wait for 10 seconds after clicked the thor
}

function draw() {
if (backgroundColor) { // instructional page 
  background(0)
  fill(128,128,128)
  rectMode(CENTER);
  rect(width/2,height/2 - 270,900*width/1000,150*height/1000,20);

  fill(128,128,128)
  rectMode(CENTER);
  rect(width/2,height/2 + 250,960*width/1000,150*height/1000,20);
  
  textAlign(CENTER);
  fill(255);
  text(clickStart);
  textSize(21*width/1000);
  text("STORY: WCI is dealing with some spooky ghosts that are trying to take over our school", width/2,height/2 - 260);
  textSize(19*width/1000);
  text("MISSION: Answer all the questions with correct answers to win the game", width/2, height/2 + 260) 
  text("NAVIGATE: Use the four arrow keys to move through the course", width/2,height/2-170)  
  frameRate(7)
  textSize(25*width/1000); 
  if (flickerColor) {
    fill(random(256),0,0);
  } else {
    fill(255)
  }

  
  text("CLICK THOR TO START THE GAME", width/2, height/2 + 170)

  image(keyboard, width/2, height/2,300*width/1000);
  image(thor,width/2+400, height/2,600,300*width/1000);
  image(ghost,width/2-400,height/2 + 10, 600, 250*width/1000);
  
} 
 
  if (flickerColor) {
    fill(random(0,256));
  } else {
    fill(255)
  }

if (thorClicked) { // introducing the game when clicked thor 
  if (keyIsDown(ARROW_RIGHT)) {
      x += 20; // Adjust the horizontal movement speed as needed
    }
  if (keyIsDown(ARROW_UP)) {
    y -= 20; 
  }
  if (keyIsDown(ARROW_DOWN)) {
    y += 20
  }
  if (keyIsDown(ARROW_LEFT)) {
      x -= 20;
  }


    image(gameBackground, width / 2 - 15, height / 2 - 15, 1100 * (width / 1000), 1100 * (height / 1000));
    image(thor, x + width / 2 - 780, y + height / 2 + 200, 350 * (width / 1000), 600 * (height / 1000));
  

  if (showSquare) {
    fill(255);
    rect(width / 2 - 350, height / 2 - 100, blankSquareSize, 250, 20);
  }
// question one 
  if (showChooseText) {
    fill(0,0,0);
    text(questions)
    textSize(15*width/1000);
    text("How many students attend WCI?", width / 2 - 350, height / 2 - 177);
    fill(optionAFill);
    text("A) 2,475", width/2 - 360, height/2 - 120);
    fill(optionBFill)
    text("B) 1,475", width/2 - 360, height/2 - 80);
    fill(optionCFill)
    text("C) 945", width/2 - 360, height/2 - 40);
  }
// question two
  if (showSquare2) {
    fill(255);
    rect(width / 2, height / 2 + 100, blankSquareSize, 250, 20);
  }
  if (showChooseText2) {
    fill(0,0,0);
    text(questions)
    textSize(15*width/1000);
    text("When was WCI founded?", width / 2, height / 2 + 30);
    fill(optionAFill2);
    text("A) 1855", width/2, height/2 + 90);
    fill(optionBFill2);
    text("B) 1964", width/2, height/2 + 130);
    fill(optionCFill2);
    text("C) 1960", width/2, height/2 + 170);
  }
// question 3
  if (showSquare3) {
    fill(255);
    rect(width / 2 + 370, height / 2 - 200, blankSquareSize, 250, 20);
  }
  if (showChooseText3) {
    fill(0,0,0);
    text(questions)
    textSize(15*width/1000);
    text("What are the school colors of WCI?", width / 2 + 370, height / 2 - 270);
    fill(optionAFill3);
    text("A) Red and White", width/2 + 370, height/2 - 220);
    fill(optionBFill3);
    text("B) White and Blue", width/2 + 370, height/2 - 170);
    fill(optionCFill3);
    text("C) Blue and Red", width/2 + 370, height/2 - 120);
  }
  if (showSquare4) {
    fill(255);
    rect(width / 2 + 540, height / 2 + 100, blankSquareSize, 250, 20);
  }
  if (showChooseText4) {
    fill(0,0,0);
    text(questions)
    textSize(15*width/1000);
    text("Who were the co-mayors of WCI in 2022?", width / 2 + 540, height / 2 + 40);
    fill(optionAFill4);
    text("A) Jude and Jackie", width/2 + 540, height/2 + 90);
    fill(optionBFill4);
    text("B) Ernie and Ella", width/2 + 540, height/2 + 140);
    fill(optionCFill4);
    text("C) Julia and Tristan", width/2 + 540, height/2 + 190);
  }
}
// welcome page or first page of the game
if (showText) {
  showText = true;
  textFont(introText,50*width/1000);
  text("Welcome to Haunted WCI",width/2,height/2);
  flickerColor = true;
  if (mouseX> width/2 - 300 && mouseX < width/2+200 && mouseY> height/2-280 && mouseY<height/2+280) {
    fill(255,0,0);

  } else {
    fill(255);
  }
  textAlign(CENTER);
  textFont(clickStart, 30*width/1000);
  text("Click Here To Start", width/2,height/2 + 280);
}
  if (gameOver) {
    background(0); // Set the background color
    fill(255); // Set the text color
    textSize(100);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    // You can also add additional game over screen elements or buttons for restarting the game.
  } 
  if (gameWin) {
    background(0,255,0);
    fill(255);
    textSize(100);
    textAlign(CENTER,CENTER);
    text("You Won!", width/2, height/2);
  }
  if (redAnswers > 1) {
  gameOver = true;
  }
  if (correctAnswers == 5) {
    gameWin = true;
  }
  if (thorClicked && !gameIsOver) {
    // Calculate the elapsed time
    let currentTime = millis();
    let elapsedTime = currentTime - startTime;

    // Check if one minute has passed
    if (elapsedTime >= gameTime) {
      // Game over logic (e.g., player loses)
      gameIsOver = true;
      // You can show a "Game Over" screen or take other actions here
    }
  }
}

function keyPressed() {
  
 if (thorClicked) {
    let distance = dist(x + width / 2 - 750, y + height / 2 + 200, width / 2  - 350, height / 2 - 100);
    if (distance < blankSquareSize / 2) {
      showSquare = true;
      showChooseText = true;
    } else {
      showSquare = false;
      showChooseText = false;
    }
  }
  // question two 
  if (thorClicked) {
    let distance2 = dist(x + width / 2 - 750, y + height / 2 + 200, width / 2, height / 2 + 100);
    if (distance2 < blankSquareSize / 2) {
      showSquare2 = true;
      showChooseText2 = true;
    } else {
      showSquare2 = false;
      showChooseText2 = false;
    }
  }
  // question three
  if (thorClicked) {
    let distance3 = dist(x + width / 2 - 750, y + height / 2 + 200, width / 2 + 200, height / 2 - 200);
    if (distance3 < blankSquareSize / 2) {
      showSquare3 = true;
      showChooseText3 = true;
    } else {
      showSquare3 = false;
      showChooseText3 = false;
    }
  }
// question 4
  if (thorClicked) {
    let distance4 = dist(x + width / 2 - 750, y + height / 2 + 200, width / 2 + 540, height / 2 + 100);
    if (distance4 < blankSquareSize / 2) {
      showSquare4 = true;
      showChooseText4 = true;
    } else {
      showSquare4 = false;
      showChooseText4 = false;
    }
  }
}

function mousePressed() {
  if (showChooseText) {
    // Start the game and the timer
    startTime = millis();
    thorClicked = true;
  }
  if(showChooseText) {
    const optionADistance = dist(mouseX, mouseY, width/2 - 360, height/2 - 120);
    const optionBDistance = dist(mouseX, mouseY, width/2 - 360, height/2 - 80);
    const optionCDistance = dist(mouseX, mouseY, width/2 - 360, height/2 - 40)
    
    if (optionADistance < 15) {
      // heart3 = false;
      optionAFill = color(255,0,0); 
      optionBFill = 0;
      optionCFill = 0;
      redAnswers++;
  } else if (optionBDistance <15) {
      optionAFill = 0;
      optionBFill = color(0,255,0);
      optionCFill = 0;
      correctAnswers++;
  
  } else if (optionCDistance <15) {
      // heart3 = false;
      optionAFill = 0;
      optionBFill = 0;
      optionCFill = color(255,0,0);
      redAnswers++;
    }
  }
  if(showChooseText2) {
    const optionADistance = dist(mouseX, mouseY, width/2, height/2 + 90);
    const optionBDistance = dist(mouseX, mouseY, width/2, height/2 + 130);
    const optionCDistance = dist(mouseX, mouseY, width/2, height/2 + 170)

    if (optionADistance < 15) {
      // heart3 = false;
      optionAFill2 = color(255,0,0); 
      optionBFill2 = 0;
      optionCFill2 = 0;
      redAnswers++;
  } else if (optionBDistance <15) {
      // heart3 = false;
      optionAFill2 = 0;
      optionBFill2 = color(255,0,0);
      optionCFill2 = 0;
      redAnswers++;

  } else if (optionCDistance <15) {
      optionAFill2 = 0;
      optionBFill2 = 0;
      optionCFill2 = color(0,255,0);
      correctAnswers++;
    }
  }
  if(showChooseText3) {
    const optionADistance = dist(mouseX, mouseY, width/2 + 370, height/2 - 220);
    const optionBDistance = dist(mouseX, mouseY, width/2 + 370, height/2 - 170);
    const optionCDistance = dist(mouseX, mouseY, width/2 + 370, height/2 - 120)

    if (optionADistance < 15) {
      optionAFill3 = color(255,0,0); 
      optionBFill3 = 0;
      optionCFill3 = 0;
      redAnswers++;
  } else if (optionBDistance <15) {
      optionAFill3 = 0;
      optionBFill3 = color(255,0,0);
      optionCFill3 = 0;
      redAnswers++;

  } else if (optionCDistance <15) {
      optionAFill3 = 0;
      optionBFill3 = 0;
      optionCFill3 = color(0,255,0);
      correctAnswers++;
    }
  }
  if(showChooseText4) {
    const optionADistance = dist(mouseX, mouseY, width/2 + 540, height/2 + 90);
    const optionBDistance = dist(mouseX, mouseY, width/2 + 540, height/2 + 140);
    const optionCDistance = dist(mouseX, mouseY, width/2 + 540, height/2 + 190)

    if (optionADistance < 15) {
      optionAFill4 = color(0,255,0); 
      optionBFill4 = 0;
      optionCFill4 = 0;
      correctAnswers++;
  } else if (optionBDistance <15) {
      optionAFill4 = 0;
      optionBFill4 = color(255,0,0);
      optionCFill4 = 0;
      redAnswers++;

  } else if (optionCDistance <15) {
      optionAFill4 = 0;
      optionBFill4 = 0;
      optionCFill4 = color(255,0,0);
      redAnswers++;
    }
  }
  if (mouseX> width/2 - 300 && mouseX < width/2+200 && mouseY> height/2-280 && mouseY<height/2+280) {
    width / 2, height / 2 + 100, blankSquareSize, 250, 20
     backgroundColor = !backgroundColor;
  }
  if (mouseX> width/2 - 250 && mouseX < width/2+150 && mouseY> height/2-280 && mouseY<height/2+280) {
    width / 2, height / 2 + 100, blankSquareSize, 250, 20
     showText = false;
  }
  // erase the text and pictures from the welcome slide
  if (mouseX > width / 2 + 400 - 300 && mouseX < width / 2 + 400 + 200 && mouseY > height / 2 - 225 && mouseY < height / 2 + 225) {
    thorClicked = !thorClicked; 
    backgroundColor = false;
  } //introduces to the game 
}
   // then transit to the story or instructional page and inform them on what keys to use to natviagte through the game
  // idea for the first gamme could be jumping through obstacles and answering questions related to wci. Then, there will always be ghost following this player. 
 // the main character is the viking or thor and the enemy are the ghost