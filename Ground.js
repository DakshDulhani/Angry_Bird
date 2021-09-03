class Ground{
    constructor(x,y,width,height){
    var options={
    'restitution':0.1,    
    'friction':0.3,
    'density':1.0,
    'isStatic':true
    }
      
    this.body=Bodies.rectangle(x,y,width,height,options); 
    this.width=width;
    this.height=height
    World.add(world,this.body)
    }
    display(){
    rectMode(CENTER)    
    fill("brown")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    //rect(700,this.body.position.y,40,60)
    }
    }