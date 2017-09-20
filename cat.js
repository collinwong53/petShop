function Cat(catName){
    this.name = catName;
    this.health = 100;
    this.hunger = 0;
    this.energy = 100;
    this.bladder = 0;
    this.speak = function(){
        console.log("Meow!")
    };
    this.eat = function(){
        console.log("Nom nom nom");
        this.hunger -= 25;
        this.bladder += 25;
    };
    this.poop = function(){
        console.log("Plop");
        this.bladder -= 25;
    };
    this.sleep = function(){
        console.log("zzzzzzz");
        this.energy += 25;
        this.hunger += 25;
        this.bladder += 25;
    };
    this.play(toy) = function(){
      if(toy.constructor.name === "Toy" && toy.type === "ribbon"){
        console.log("*scratch* *chew*")
      }
      else{
        console.log("not interested")
      }
    }
    this.gravityTest = function(object){
        console.log(object + " flies off the table")
    }
}

var cat = new Cat("Meeko");