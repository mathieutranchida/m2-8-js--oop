// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.species = "cat";
      this.tiredness = 50;
      this.hunger = 50;
      this.loneliness = 50;
      this.happiness = 10;
    }
    sleep = (hours) => {
      this.tiredness = this.tiredness - 5 * hours;
      this.happiness = this.happiness + 1 * hours;
    };
    eat = (kibbles) => {
      this.hunger = this.hunger - kibbles / 5;
      this.happiness = this.happiness + 0.1 * kibbles;
    };
    play = (minutes) => {
      this.loneliness = this.loneliness - minutes * 3;
      this.happiness = this.happiness + 5 * minutes;
    };
    wait = (minutes) => {
      this.tiredness = this.tiredness + 0.1 * minutes;
      this.hunger = this.hunger + 1 * minutes;
      this.loneliness = this.loneliness + 0.5 * minutes;
      this.happiness = this.happiness - 0.2 * minutes;
    };
  }
  
  let boots = new Cat("boots", "simaese");
  
  boots.sleep(5);
  boots.eat(100);
  boots.play(5);
  boots.wait(20);
  
  console.log(boots);
  
  Cat {
      sleep: [Function],
      eat: [Function],
      play: [Function],
      wait: [Function],
      name: 'boots',
      breed: 'simaese',
      species: 'cat',
      tiredness: 27,
      hunger: 50,
      loneliness: 45,
      happiness: 46 }
  