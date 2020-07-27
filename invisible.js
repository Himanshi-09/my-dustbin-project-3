class invisibleobject{
    constructor(x,y,width,height){
        var options = {
            isStatic : false
        }
    this.image = loadImage("sprites25/dustbingreen.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill ("yellow");
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}