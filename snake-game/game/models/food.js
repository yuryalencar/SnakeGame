class Food{
    constructor(scl){
        this.x = 0;
        this.y = 0;
        this.scale = scl;
    }

    newLocate(width, height){
        this.x = Math.floor(Math.random() * 10);
        this.x = this.x * (width / this.scale);
        
        this.y = Math.floor(Math.random() * 10);
        this.y = this.y * (height / this.scale);
    }
}