class Hanger{
    constructor(x,y,width,height) {
    var boptions = {restitution:0.8,friction:1.5,density:0.9};
    this.body = Bodies.rectangle(x,y,width,height,boptions);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display() {
     this.body.isStatic=true;
    push();
    fill("green");
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    }
    }