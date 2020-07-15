function Node (element) {
    this.element = element;
    this.next = null;
}


function LinkList () {
    this.head = new Node('head'); // 头节点
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrev = findPrev;
    this.remove = remove;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(element, item) {
    var newNode = new Node(element);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode; 
}

function display() {
    var currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.element);
        currNode = currNode.next;
    }
}

function findPrev (item) {
    var currNode = this.head;
    while (currNode.next !== null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove (item) {
    var prevNode = this.findPrev(item);
    var currNode =this.find(item);
    if (currNode != null) {
        prevNode.next = currNode.next;
        currNode = null; // 释放内存
    }
}

// test
var ll = new LinkList();
ll.insert('A', 'head');
ll.insert('B', 'A');
ll.insert('C', 'B');
ll.insert('D', 'C');

ll.display();

ll.remove('B');

ll.display();
