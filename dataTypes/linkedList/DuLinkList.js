
function Node (element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DuLinkList () {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.displayReverse = displayReverse; // 反序
}

function find (item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert (element, item) {
    var newNode = new Node(element);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
    // 如果不是尾节点
    if (newNode.next != null) {
        newNode.next.previous = newNode;
    }
}

function display () {
    var currNode = this.head;
    while (currNode.next != null) {
        console.log(currNode.element);
        currNode = currNode.next;
    }
}

function remove (item) {
    var currNode = this.find(item);
    // 如果不是尾节点
    if (currNode.next != null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null; // 释放内存
        currNode.previous = null;
    } else {
        currNode.previous.next = null;
        currNode.previous = null;
    }
}

function findLast () {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

function displayReverse () {
    var currNode = this.findLast();
    while (currNode.previous != null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}


// test
var ll = new DuLinkList();
ll.insert('A', 'head');
ll.insert('B', 'A');
ll.insert('C', 'B');
ll.insert('D', 'C');

ll.display()
ll.displayReverse();

ll.remove('B');

ll.display();