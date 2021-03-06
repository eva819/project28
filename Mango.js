class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(word, this.body)
    }
    display(){
        push()
        translate(this.body.position.x , this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}