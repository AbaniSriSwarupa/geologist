class Iron{
    constructor(x,y){
        var options ={
            'restitution':0.8,
            'friction':3,
            'density':30  
        }

        this.body = Bodies.rectangle(x,y,30,30,options)
        this.width = 30;
        this.height = 30;

        World.add(world,this.body)
    }
    display(){
        console.log("entering iron  class")
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);

        fill("green")
        rect(0,0,30,30);
        pop();
    }
}