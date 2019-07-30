# Queue with Stacks

[Return to List of Challenges](../../README.md)

## Challenge
Create a queue data structure by using two stacks only.

## Approach & Efficiency
A PseudoQueue class is made that creates two empty stacks inside of its contructor.  For enqueueing new items, only one stack is used.  New items are simply pushed onto this stack.  For dequeue, first the second stack is checked if it is empty.  If it is, all items in the first stack will be popped off and pushed onto the second stack.  This has the effect of reversing all items.  The top item is then popped off the second stack.  Any items still remaining on the second stack are still in the correct queue order, so when dequeue is called again and there are items on the second stack, one is simply popped off.

Time complexity for enqueue is O(1), as items are just pushed onto the stack.  Dequeue is O(n) if the second stack is empty, or O(1) if it is not.  Space complexity is O(n) where is n is the number of items that would be in the theoretical queue.  It doesn't go above this because although there are two stacks, anytime an item is dequeued all of the existing items are just moved between the two stacks.  There is never any duplicates of any values present.