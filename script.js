/**
 * Created by jlxc106 on 7/12/17.
 */

var temp;

function Card(suit, value){
    this.suit = suit;
    this.value = value;
    console.log("new card made! Suit: " + this.suit + " value: " + this.value);
}


function Game(){
    this.suitList = ["Diamond","Heart","Club","Spade"];
    this.valueList = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    this.init = function(){
        for(var i=0; i<52; i++){
            temp = new Card(this.suitList[Math.floor(i%4)], this.valueList[Math.floor(i/4)]);
        }
    }
}

var g = new Game();
g.init();