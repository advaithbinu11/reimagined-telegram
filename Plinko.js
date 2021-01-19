class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1,
            friction:0
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}