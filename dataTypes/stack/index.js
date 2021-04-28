
function Stack () {
    this.data = []; // 保存栈内元素
    this.top = 0; // 标记可以插入新元素的位置
    this.push = push; // 入栈操作
    this.pop = pop; // 出栈操作
    this.peek = peek; // 返回栈顶元素
    this.length = length; // 清空栈
    this.clear = clear; // 栈的长度
}

function push (element) {
    this.data[this.top++] = element;
}

function pop () {
    return this.data[this.top--];
}

function peek () {
    return this.data[this.top-1];
}

function length () {
    return this.top;
}

function clear () {
    this.top = 0;
}

// test
var stack = new Stack();
stack.push(3)
stack.push(6)
stack.push(9)

console.log(stack.length())
console.log(stack.peek())
