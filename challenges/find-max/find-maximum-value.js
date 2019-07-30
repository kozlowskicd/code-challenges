const Queue = require('../../__tests__/data-structures/queue.js');

const findMax = (root) => {
  let temp;
  const q = new Queue();
  q.enqueue(root);
  while (q.peek() !== null) {
    const node = q.dequeue();
    if (node.left) q.enqueue(node.left);
    if (node.right) q.enqueue(node.right);
    if (typeof node.value === 'number') {
      if (typeof temp !== 'number') temp = node.value;
      if (node.value > temp) temp = node.value;
    }
  }
  return temp || null;
};

module.exports = findMax;
