// linked list traversal template
export default function traverseLinkedList(head) {
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current = next;
  }
}
