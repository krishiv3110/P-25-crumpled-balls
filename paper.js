class Paper {

    constructor(x,y,radius){

    var options = {

      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2

    }
     
      this.body = Bodies.circle(x, y, radius, options);
      this.x=x
      this.y=y
      
      this.image = loadImage("paper.png");
      this.radius = radius*2;
      World.add(world, this.body);

    }
      
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill ("yellow")
      //rect(0, 0, this.width, this.height);
      circle(0,0,this.radius)
      pop();

        
    }

}