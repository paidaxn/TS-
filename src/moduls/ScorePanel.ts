class ScorePanel{
    score = 0;
    level = 1;
    maxLevel:number;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    constructor(maxLevel:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % 5 === 0){
            this.levelUp();
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;