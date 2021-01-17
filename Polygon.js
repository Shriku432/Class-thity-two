class polygon{
 
constructor(x,y){
var options={
'restitution':1.0,
'friction':1.0,
'density':0.7

}
this.body=Bodies.rectangle(x,y,50,30,options);
this.width=50;
this.height=30;
this.image=loadImage("polygon.png")
World.add(world,this.body)


}

display(){
var pos=this.body.position;
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)

}


}