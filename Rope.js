

class Rope{
    constructor(body1,point2){
var options={

    bodyA:body1,
     pointB:point2,
     stiffness: 3,
     length:20 
     
    }

    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    }
      

    
    
      
    display(){
      
            var pointA= this.sling.bodyA.position
            var pointB= this.sling.pointB
            strokeWeight(3)
            stroke(240,6,15)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
          
        }
    
}
