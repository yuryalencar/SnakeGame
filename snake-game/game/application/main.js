
window.onload = function game() {

    let canvas = this.document.createElement("canvas");
    canvas.width = w = 600;
    canvas.height = h = 600;
    this.document.body.appendChild(canvas);
    
    let context = canvas.getContext("2d");

    let scale = 10;
    
    let snake = new Snake(scale);
    let food = new Food(scale);
    food.newLocate(w, h);
    let sense = "right";
    let fps = 5;
    
    update();
    
    function update() {
        context.clearRect(0, 0, this.w, this.h);
        if(snake.move(sense, w, h)){
            snake = new Snake(scale);
            food.newLocate(w, h);
            sense = "right";
        } else if (snake.eat(food.x, food.y)){
            food.newLocate(w, h);
        }
        drawGame();
        
        setTimeout(function() {
            requestAnimationFrame(update);
        }, 1000 / fps);
    }

    this.document.addEventListener("keydown", pressKey);
    
    function pressKey(event) {
        switch (event.keyCode) {
            case 37:
                sense = "left";
                break;
            case 38:
                sense = "top";
                break;
            case 39:
                sense = "right";
                break;      
            case 40:
                sense = "down";
                break;
        }
    }

    function drawGame() {
        // Background Game
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0, 0, w, h);

        // Food
        context.beginPath();
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, scale, scale);
    
        // Snake
        context.beginPath();
        context.fillStyle = "white";
        context.fillRect(snake.x, snake.y, scale, scale);

        for (let index = 0; index < snake.trail.length; index++) {
            context.beginPath();
            context.fillStyle = "white";
            context.fillRect(snake.trail[index].x, snake.trail[index].y, scale, scale);            
        }
    
    }
}

window.onresize = function(){ location.reload(); }