class Ground{

constructor(x,y,width,height){

 var option1 = {

  isStatic : true

 }

 this.width = width
 this.height = height

 this.body = Bodies.rectangle(x,y,width,height,option1)
 World.add(world,this.body)

  }

  display(){

    var pos = this.body.position
    fill("blue");
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    

  }

}
