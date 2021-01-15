class Ball{
    constructor(x,y,radius) {
    var boptions = {restitution:0.8,friction:1.5,density:0.9};
    this.body = Bodies.circle(x,y,radius,boptions);
    this.radius = radius;
    
    World.add(world,this.body);
    }
    display() {
    
    push();
    fill("yellow");
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
    }