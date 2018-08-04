class Snake {
    
    constructor(scl){
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speed = 1;
        this.scale = scl
        this.trail = [];
        this.dead = false;
        this.yspeed = 0;
        this.xspeed = this.speed;
    }
    
    move(sense, w, h) {
        switch (sense) {
            case "right":
                if(this.xspeed != -1){
                    this.yspeed = 0;
                    this.xspeed = this.speed;
                }
                break;
            case "left":
                if(this.xspeed != 1){
                    this.yspeed = 0;
                    this.xspeed = -1 * this.speed;
                }
                break;
            case "top":
                if(this.yspeed != 1){
                    this.xspeed = 0;
                    this.yspeed = -1 * this.speed;
                }
                break;
            case "down":
                if(this.yspeed != -1){
                    this.xspeed = 0;
                    this.yspeed = this.speed;
                }
                break;
            default:
                break;
        }


        if(this.x < 0){
            this.x = w;
        }
        if(this.x > w){
            this.x = 0;
        }
        if(this.y > h){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = h;
        }

        this.trail.push({x:this.x, y:this.y});
        while (this.trail.length > this.size) {
            this.trail.shift();
        }

        //if ((this.x+this.scale >= w && this.xspeed == 1) || (this.x <= -1)) {
        //    this.xspeed = 0;
        //    this.dead = true;
        //} else if((this.y+this.scale >= h && this.yspeed == 1) || (this.y <= -1)) {
        //    this.yspeed = 0;
        //    this.dead = true;
        //}
                
        this.x = this.x + this.xspeed * this.scale;
        this.y = this.y + this.yspeed * this.scale ;

        for (let i = 0; i < this.trail.length; i++) {
            if(this.x == this.trail[i].x && this.y == this.trail[i].y){
                this.dead = true;
                break;
            }
        }

        return this.dead;
    }

    setSpeed(){
        this.speed;
    }

    eat(x2,y2){
        let distance = Math.sqrt( (this.x-x2)*(this.x-x2) + (this.y-y2)*(this.y-y2) );
        if (distance < 1){
            this.size++;
            console.log("Score:" + this.size);
            return true;
        } else {
            return false;
        }
    }
}