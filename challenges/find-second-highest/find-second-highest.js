'use strict';

const findSecondHighest = array => {
  if(array.length < 2 || typeof array !== 'object') {
    return null;
  }
  let max = array[0];
  let max2;
  for(let i = 1; i < array.length; i++) {
    if(array[i] > max) {
      max2 = max;
      max = array[i];
    }
    else if (array[i] > max2) {
      max2 = array[i];
    }
  }
  return max2;
}

module.exports = findSecondHighest;