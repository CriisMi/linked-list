function LinkedList() {
  let end = NodeElement("end");
  let head = NodeElement("head", end);

  let length = 0;

  return {
    append(value) {
      length++;
      let newNode = NodeElement(value, end);

      (function changePointer(node = head) {
        if (node.nextNode == end) {
          node.nextNode = newNode;
          return;
        }
        return changePointer(node.nextNode);
      })();
    },

    prepend(value) {
      length++;
      let newNode = NodeElement(value, head.nextNode);
      head.nextNode = newNode;
    },

    size() {
      return length;
    },

    head() {
      return head.nextNode;
    },

    tail() {
      let node = head;
      while (node.nextNode.nextNode != null) {
        node = node.nextNode;
      }
      return node;
    },

    at(index) {
      let node = head;
      if (index > length - 1) {
        index = length - 1;
      }
      for (let i = 0; i <= index; i++) {
        node = node.nextNode;
      }

      return node;
    },

    pop() {
      let node = head;
      while (node.nextNode.nextNode.nextNode != null) {
        node = node.nextNode;
      }
      node.nextNode = end;
      length--;
    },

    contains(value) {
      let node = head.nextNode;
      while (node.value != value) {
        if (node.nextNode === null) {
          return null;
        }
        node = node.nextNode;
      }
      return true;
    },

    find(value) {
      let node = head.nextNode;
      let index = 0;
      while (node.value !== value) {
        if (node.nextNode === null) {
          return null;
        }
        node = node.nextNode;
        index++;
      }
      return index;
    },

    insertAt(value, index) {
      let node = this.at(index - 1);
      let newNode = NodeElement(value, node.nextNode);
      node.nextNode = newNode;
    },

    toString(node = head) {
      if (node.value === "end") {
        return null;
      }

      return node.value + " -> " + this.toString(node.nextNode);
    },
  };
}

function NodeElement(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

let list = LinkedList();
list.append("luna");
list.prepend("bobi");
list.prepend("honey");
console.log(list.toString());
console.log(list.at(2));
console.log(list.contains("honey"));
console.log(list.find("honey"));
list.pop();
list.insertAt("sunny", 5);
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
