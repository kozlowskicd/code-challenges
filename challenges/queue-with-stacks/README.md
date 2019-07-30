# Merge Two Linked Lists

[Return to List of Challenges](../../README.md)

## Challenge
Given two linked lists, merge the lists into onle list.  The nodes of the list should alternate through the list, one from the first list, then one from the second list, etc.

## Approach & Efficiency
This function consists of a loop that runs as long as at least one of the lists has not reached the end.  Each iteration, both of the next nodes in each list are assigned to a variable, then the next of the first list's node is assigned to the current node of the second, then the original next of the first list is assign to the next after that.  Both of the current nodes are moved to the next nodes in each list and the loop repeats.  The result is that the first list will get all of the nodes of the second list merged into it.  After the loop, the first list is returned.

Time complexity is O(n) where n is the length of whichever list is longest.  Space complexity is O(1) because nothing new is being created, only pointers to other nodes is being changed.