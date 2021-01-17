class block{
constructor(x,y){
var options={
'restitution':0.9,
'friction':1.0,
'density':1.0

}
this.body=Bodies.rectangle(x,y,50,30,options);
this.width=50;
this.height=30;
World.add(world,this.body)


}

display(){
    console.log(this.body.speed);
    if(this.body.speed <3){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility -5;
    pop();
    
  }
}
score(){
if(this.visiblity<0 &&  this.visiblity>-105){
score++


}


}

}