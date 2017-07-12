/**
 * Created by jlxc106 on 7/12/17.
 */

var temp;

function Card(suit, value){
    this.suit = suit;
    this.value = value;
    // console.log("new card made! Suit: " + this.suit + " value: " + this.value);
}


function Game(){
    this.suitList = ["Diamond","Heart","Club","Spade"];
    this.valueList = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    this.cardList = [];
    this.randomizedCardList = [];
    this.playerList = [[],[],[],[]];
    this.init = function() {
        for (var i = 0; i < 52; i++) {
            temp = new Card(this.suitList[i % 4], this.valueList[Math.floor(i / 4)]);
            this.cardList.push(temp);
        }
        this.randomize();
        this.populatePlayerCards();
        // console.log("this.cardList: ", this.cardList);
    }

    this.randomize = function(){
        while(this.cardList.length > 0){
            var randomNum = Math.floor(Math.random()*this.cardList.length);
            this.randomizedCardList.push(this.cardList[randomNum]);
            this.cardList.splice(randomNum, 1);
        }
        // console.log("this.randomizedCardList: ", this.randomizedCardList);
    }

    this.populatePlayerCards = function(inputNum){
        var tempIndex = 0;
        while(this.randomizedCardList.length > 0){
            this.playerList[tempIndex].push(this.randomizedCardList[0]);
            this.randomizedCardList.shift();
            tempIndex++;
            if(tempIndex > 3){
                tempIndex = 0;
            }
        }
        console.log("this.playerList: ", this.playerList);
    }

}

var g = new Game();
g.init();