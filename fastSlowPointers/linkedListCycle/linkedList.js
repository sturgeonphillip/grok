import Node from './node.js';

// linked list template
class LinkedList {
  constructor() {
    this.head = null;

    // method to insert node at head of linked list
    this.insertAtHead = function (node) {
      if (this.head !== null) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }
    };

    // method to create a linked list using the given integer array with help of insertAtHead method
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let node = new Node(element);
        this.insertAtHead(node);
      });
    };

    // get number of nodes in linked list
    this.getLength = function (head) {
      let length = 0;
      let temp = head;
      while (temp !== null) {
        length++;
        temp = temp.next;
      }

      return length;
    };

    // get node at specific position in list
    this.getNode = function (head, position) {
      if (position !== -1) {
        let p = 0;
        let pointer = head;
        while (p < position) {
          pointer = pointer.next;
          p += 1;
        }
        return pointer;
      }
    };

    // display elements of linked list
    this.display = function () {
      let result = '',
        temp = this.head;
      while (temp !== null) {
        result += temp.data;
        temp = temp.next;
        if (temp !== null) {
          result += ', ';
        }
      }
      result += '';
      return result;
    };
  }
}

export default LinkedList;
