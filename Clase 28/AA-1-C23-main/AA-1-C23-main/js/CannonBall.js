class CannonBall {
  constructor(x,y){
    var options={
        isStatic:true
    }
    this.r=30;
    this.body=Bodies.circle(x,y,this.r,options)
        this.cannonBall=loadImage("assets/cannonball.png")
        this.PuntosBlancos=[]
        World.add(world,this.body)
    }

    Killer(){
        var NewAngle=canon1.a-25
        NewAngle=NewAngle*(3.14/180)
        var Velocity=p5.Vector.fromAngle(NewAngle)
        Velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:Velocity.x*(180/3.14),y:Velocity.y*(180/3.14)}) 
    }

    deploy(){
        push();
        imageMode(CENTER);
        image(this.cannonBall,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();

        var AMD=[this.body.position.x,this.body.position.y]
        this.PuntosBlancos.push(AMD)

        for(var i=0; i<this.PuntosBlancos.length;i++){
        image(this.cannonBall,this.PuntosBlancos[i][0],this.PuntosBlancos[i][1],5,5)


        }
    }
}
 