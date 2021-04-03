class Bob{
    constructor(x,y,width,height){
        var boboptions={
    
          
          'density':0.1
  
            
        }
    
      this.body= Bodies.rectangle(x,y,width,height,boboptions)
     
     this.width = width
     this.height = height
     
      World.add(world,this.body)
    }
    display(){
    
    var pos= this.body.position
    ellipseMode(CENTER)
    push ()
    fill ("blue")
    ellipse(pos.x,pos.y,this.width,this.height)
    
    pop ()
    }
    
    }