var ballWidth;

var colors = [];
var balls = [];

var numBalls = 7;

var frameOffset = 15;

function setup() {
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);  rectMode(CENTER);
  
  angleMode(DEGREES);

  ballWidth = width / 15;

  colors = [
    function() {
      return stroke(255, 100, 100)
    }, //RED
    function() {
      return stroke(255, 177, 100)
    }, //ORANGE
    function() {
      return stroke(255, 255, 100)
    }, //YELLOW
    function() {
      return stroke(150, 255, 150)
    }, //GREEN
    function() {
      return stroke(150, 255, 255)
    }, //BLUE
    function() {
      return stroke(100, 150, 255)
    }, //INDIGO
    function() {
      return stroke(177, 150, 255)
    }, //VIOLET
  ]

  for (let i = numBalls - 1; i >= 0; i--) {
    balls[i] = new Ball(i);
  }
}

function draw() {
  background(40);
  translate(width / 2, height / 2);
  rotate(-90);

  //Outline
  ellipseMode(CENTER);
  noFill();
  strokeWeight(ballWidth);
  stroke(60);
  ellipse(0, 0, width * 2 / 3, height * 2 / 3);

  //Ball
  for (let i = numBalls - 1; i >= 0; i--) {
    balls[i].create();
  }

  for (let i = 0; i < numBalls; i++) {
    if (frameCount > i * frameOffset) {
      balls[i].move();
    }
  }
}
