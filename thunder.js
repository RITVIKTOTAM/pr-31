class Thunder{
    constructor(x, y, width, height, angle) {
        var options = {
          'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.animation = loadAnimation("1.png","2.png","3.png","4.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.animation, 0, 0, this.width, this.height);
        pop();
      }
}