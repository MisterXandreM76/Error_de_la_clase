class BoteDeGuerra{
 constructor(x,y,w,h,p){
 
this.w=40
this.h=40
this.p=p
this.body=Bodies.rectangle(x,y,this.w,this.h)
     this.BoteDeGuerra=loadImage("assets/boat.png")
     World.add(world,this.body)
  }

  show(){
   push();
   imageMode(CENTER);
   image(this.BoteDeGuerra,this.body.position.x,this.body.position.y,this.w,this.h)
   pop();


  }
}