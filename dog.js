function Dog(givenName){
  this.name = givenName;
  this.rename = function(newName){
    this.name = newName;
  };
  this.health = 5;
  this.hunger = 5;
  this.eat = function(food){
    console.log(this.name + " eats "+food);
    this.health+=1;
    this.hunger+=1;
    this.checkHealth();
  };
  this.sleep = function(){
    console.log("zzzzzzzz, "+this.name+" is sleeping!");
    this.hunger -=1;
    if(this.hunger <=3){
      this.health -=1;
    }
    
    if(this.health <=0){
      this.die();
    }
  };
  this.die = function(){
    console.log(this.name+ " has died!");
  }
  this.defecate = function(){
    console.log(this.name + " took a shit!");
    this.hunger -=1;
    if(this.hunger <=3){
      this.health -=1;
    }
    
    if(this.health <=0){
      this.die();
    }
  };
  this.play = function(toy){
    console.log(this.name + " plays with a " + toy.name);
  };
  this.speak = function(){
    console.log(this.name + " barks!");
  };
  this.running = function(){
    console.log(this.name + " went for a run!");
    this.health+=1;
    this.checkHealth();
  }
  this.checkHealth = function(){
    if(this.health >= 5){
      console.log(this.name+" is feeling great!");
    }
    else if(this.health >=3){
      console.log(this.name+" is feeling okay.");
    }
    else if(this.health >=1){
      console.log(this.name+" needs food!");
    }
  }
}