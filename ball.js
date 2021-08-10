class Ball {
  constructor(index) {
    this.index = index;
    this.ballAngle = 0;
    this.speedAngle = 0;
    this.x = 0;
  }

  create() {
    push();
    colors[this.index]();
    arc(0, 0, width * 2 / 3, height * 2 / 3, this.ballAngle, this.ballAngle + 0.00058);
    pop();
  }

  move() {
    this.ballAngle = map(cos(this.speedAngle), -exp(this.x), exp(this.x), 0, 360);
    this.x += 0.0015;
    this.speedAngle += 2.5;
  }
}