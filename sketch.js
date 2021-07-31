var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-10);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 570, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("pink")
    textSize(40);
    text("TREASURE UNLOCKED",300, 400);
  }

  drawSprites()
}