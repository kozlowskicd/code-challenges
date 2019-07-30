const Queue = require('../../__tests__/data-structures/queue.js');

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.cats.enqueue(animal);
    } else if (animal === 'dog') {
      this.dogs.enqueue(animal);
    }
    return null;
  }

  dequeue(pref) {
    if (pref === 'cat') {
      return this.cats.dequeue();
    } if (pref === 'dog') {
      return this.dogs.dequeue();
    }
    return null;
  }
}

module.exports = AnimalShelter;
