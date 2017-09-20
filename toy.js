function Toy(name, type, sound) {
  this.name = name;
  this.type = type;
  this.sound = sound;
  this.health = 100;
  this.owner = null;
  this.changeOwner = function(newOwner){
  	this.owner = newOwner;
  }
  this.loseOwner = function(){
  	this.owner = null;
  }
  this.bePlayedWith = function(){

  	this.health -= owner.size;
  }
  this.effect = function() {
    if (owner === "human") {
      console.log(owner + "" + "I am" + this.type + ", " + this.sound +);
    }
  }
}

var dalek = new Toy("Dalek","Robot","Exterminate!");
var ducky = new Toy("Rubber Ducky","Chew Toy","SQUEEK");

