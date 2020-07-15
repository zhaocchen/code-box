function List () {
    this.data = []; // 初始化空数组来保存列表元素
    this.size = 0; // 列表元素个数
    this.length = length; // 列表包含元素的个数
    this.indexOf = indexOf; // 查找元素
    this.append = append; // 在列表元素末尾增加新元素
    this.remove = remove; // 从列表中删除元素
    this.toString = toString; // 返回列表字符串形式
    this.insert = insert; // 在现在元素后插入新元素
    this.pos = 0; // 列表当前位置
    this.clear = clear; // 清空列表中的所有元素
    this.includes = includes; // 是否包含元素
    this.front = front; // 从列表的当前位置移动到第一个位置
    this.end = end; // 从列表的当前位置移动到最后一个位置
    this.next = next; // 当前位置前移一位
    this.currPos = currPos; // 返回列表当前位置
    this.moveTo = moveTo; // 将当前位置移动到指定位置
    this.getElement = getElement; // 显示当前的元素
}

function append (element) {
    this.data[this.size++] = element;
}

function indexOf (element) {
    for (var index = 0; index < this.size; index++) {
        if (this.data[index] === element) {
            return index;
        }
    }
    return -1;
}

function remove (element) {
    var indexOf = this.indexOf(element);
    if (indexOf > -1) {
        this.data.slice(index, 1);
        --this.size;
        return true;
    }
    return false;
}

function length () {
    return this.size;
}

function toString () {
    return this.data + '';
}

function insert (element, afterElement) {
    var insertPos = this.indexOf(afterElement);
    if (insertPos > -1) {
        this.data.splice(insertPos+1, 0, element);
        ++this.size;
        return true;
    }
    return false;
}

function clear() {
    delete this.data;
    this.data.length = 0;
    this.size = 0;
    this.pos = 0;
}

function includes (element) {
    for (var index = 0; index < this.size; ++index) {
        if (this.data[index] === element) {
            return true;
        }
    }
    return false;
}

function front () {
    this.pos = 0;
}

function end () {
    this.pos = this.size - 1;
}

function next () {
    if (this.pos < this.size) {
        ++this.pos;
    }
}

function currPos () {
    return this.pos;
}

function moveTo (position) {
    this.pos = position;
}

function getElement () {
    return this.data[this.pos];
}


// test
var nums = new List();
// console.log(nums)
nums.append(3);
nums.append(6);
nums.append(9);
nums.append(12);

nums.next();
console.log(nums.getElement());

for (nums.front(); nums.currPos() < nums.size; nums.next()) {
    console.log(nums.getElement());
}