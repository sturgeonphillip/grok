import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;

    this.insertNodeAtHead = function (node) {
      if (this.head !== null) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }
    };

    // uses given integer array to create linked list with insertAtHead method
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new Node(element);
        this.insertNodeAtHead(newNode);
      });
    };

    this.display = function () {
      let result = '';
      let temp = this.head;
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
