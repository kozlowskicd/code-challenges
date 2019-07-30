const AnimalShelter = require('../challenges/animal-shelter/animal-shelter.js');

describe('Animal Shelter Class', () => {
  it('creates instances of an AnimalShelter', () => {
    const as = new AnimalShelter();
    expect(as).toBeInstanceOf(AnimalShelter);
  });
  it('can enqueue cats', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    expect(as.cats.front.value).toEqual('cat');
  });
  it('can enqueue dogs', () => {
    const as = new AnimalShelter();
    as.enqueue('dog');
    expect(as.dogs.front.value).toEqual('dog');
  });
  it('can enqueue both cats and dogs', () => {
    const as = new AnimalShelter();
    as.enqueue('dog');
    as.enqueue('cat');
    expect(as.dogs.front.value).toEqual('dog');
    expect(as.cats.front.value).toEqual('cat');
  });
  it('can dequeue cats and dogs', () => {
    const as = new AnimalShelter();
    as.enqueue('dog');
    as.enqueue('cat');
    expect(as.dequeue('cat')).toEqual('cat');
    expect(as.cats.front).toBeNull();
    expect(as.dequeue('dog')).toEqual('dog');
    expect(as.dogs.front).toBeNull();
  });
  it('returns null if trying to dequeue an empty queue', () => {
    const as = new AnimalShelter();
    expect(as.dequeue('cat')).toBeNull();
    expect(as.dequeue('dog')).toBeNull();
  });
  it('returns null if no arguments are passed', () => {
    const as = new AnimalShelter();
    expect(as.enqueue()).toBeNull();
  });
  it('returns null if anything other than a cat or dog is enqueued or dequeued', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    as.enqueue('dog');
    expect(as.enqueue('elephant')).toBeNull();
    expect(as.dequeue('elephant')).toBeNull();
  });
});
