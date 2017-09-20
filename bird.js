function Bird(name,health,speed){
  this.altitude = 0;
  this.speed = speed;
  this.name = name;
  this.health = health;
  this.eat = function(){
    console.log(this.name, " is getting some worms")
    health+=10;
  };
  this.sleep = function(){
    console.log("birds asleep");
  };
  this.shit = function(){
    console.log(this.name, ' just shat on ur lap')
    health+=3;
  };
  this.play = function(){
    console.log(this.name,'is playing');
  };
  this.fly = function(){
    this.altitude+= speed;
  };
  this.descend = function(){
    this.altitude -= speed;
  };
  this.speak = function(){
    console.log('chirp');
  };  
}
var pete = new Bird("pete",20,5);