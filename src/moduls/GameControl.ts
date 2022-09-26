import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    dirction:string = 'hh';
    isLive = true;
    speed:number = 300;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(event:KeyboardEvent){  
        if(event.key == "Shift"){
            this.speed = 150;
            return
        }
        if(event.key == "Control"){
            this.speed = 300;
            return
        }
        if(this.dirction == "ArrowUp" && event.key == "ArrowDown") {
            return
        }  
        else if(this.dirction == "ArrowDown" && event.key == "ArrowUp") {
            return
        }  
        else if(this.dirction == "ArrowRight" && event.key == "ArrowLeft") {
            return
        }  
        else if(this.dirction == "ArrowLeft" && event.key == "ArrowRight") {
            return
        }
            this.dirction = event.key;
    }
   
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.dirction) {
            case "ArrowUp": 
                Y -= 10;              
                break;
            case "ArrowDown": 
                Y += 10;              
                break;
            case "ArrowRight":  
                X += 10;        
                break;
            case "ArrowLeft":    
                X -= 10;           
                break;       
            default:
                break;
        }

        this.checkEat(X,Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e);
            this.isLive = false;
        }    
        this.isLive && setTimeout(this.run.bind(this),this.speed-((this.scorePanel.level - 1)*25))
    }
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;