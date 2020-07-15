function Queue () {
    this.data = [];
    this.size = 0;
    this.enqueue = enqueue; // 队尾增加元素
    this.dequeue = dequeue; // 删除队首元素
    this.front = front; // 读取队首元素
    this.rear = rear; // 读取队尾元素
    this.toString = toString; // 显示队列所有元素
    this.isEmpty = isEmpty; // 判断是否是空队列
}

function enqueue (element) {
    // this.data.push(element);
    this.data[this.size++] = element;
}

function dequeue () {
    this.data.shift();
    this.size--;
}

function front () {
    return this.data[0];
}

function rear () {
    return this.data[this.size - 1];
}

function toString () {
    var res = '';
    for (var i = 0; i < this.size; i++) {
        res += this.data[i] +  ','
    }
    return res;
}

function isEmpty () {
    return this.size === 0;
}

// test  
var queue = new Queue();
queue.enqueue(3)
queue.enqueue(6)
queue.enqueue(9)
queue.dequeue()

console.log(queue.toString())
console.log(queue.front())
console.log(queue.rear())
