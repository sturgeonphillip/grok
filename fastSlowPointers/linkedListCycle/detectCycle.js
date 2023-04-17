import LinkedList from './linkedList.js';
import Node from './node.js';

export function detectCycle(head) {
  if (!head) return false;

  // init fast & slow to head of LL
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // move slow one node and fast two nodes
    slow = slow.next;
    fast = fast.next.next;
    // check if slow and fast point to same node
    if (slow === fast) {
      return true;
    }
  }
  // no cycle if fast reaches end of list (fast is null)
  return false;
}

/**
 * TIME:
 * The time complexity of the detectCycle function is O(n), where n is the number of nodes in the linked list. The while loop iterates through the linked list once and each iteration takes constant time.
 *
 * The built-in JS functions invoked by the code have the following time complexities:
 * -> reverse(), forEach(), and display() methods called on an array have a time complexity of O(n), where n is the number of nodes in the linked list (the length of the array).
 *
 * SPACE:
 * Space complexity of the detectCycle function is O(1) because it uses only a constant amount of extra space to store two pointers. The space complexity of JS functions invoked by the code is also O(1) because they don't use any extra space that depends on the size of the input. The space complexity of the LinkedList class and Node class is O(n), where n is the number of nodes in the linked list because they store the data and next pointers for each node in the linked list.
 *
 */
