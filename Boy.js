class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body = Bodies.retangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Plucking mangoes/boy.png")
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x , this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}