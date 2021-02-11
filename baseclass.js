class BaseClass {
  constructor(x,y,width,height){
    var options = {
      restitution : 0.8,
      friction :1.0,
      density : 1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);  // Add the body you have created to your world.
    this.w= width;
    this.h = height;
    this.image = loadImage('sprites/base.png');

    World.add(world,this.body)//  World.add(world you have created, body you want to add);
  }

  display(){
    var pos=this.body.position;
    push();
    translate(this.body.position.x,this.body.position.y);

    //angleMode(RADIANS);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop ();
  }
}
