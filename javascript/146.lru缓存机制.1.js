/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = [];
    this.capacity = capacity;
    this.head = null;
    this.last = null;

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.includes(key)) return -1;
    if (this.head.key == key) return this.head.val;
    // find in DLL
    let point = this.head;
    while (point != null && point.key != key) {
        point = point.next;
    }
    let val = point.val;
    this.delete(key);
    this.put(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.head == null || this.capacity == 1) {
        this.putHead(key, value);
        return;
    }
    if (this.head.key == key) {
        this.head.val = value;
        return;
    }
    
    if (this.cache.includes(key)) {
        this.delete(key);
    }
    if (this.cache.length == this.capacity) {
        this.deleteLast();
    }
    let node = new Node(key, value);
    node.next = this.head
    this.head.prev = node;
    this.head = node;
    this.cache.push(key);
};


LRUCache.prototype.putHead = function (key, value) {
    let node = new Node(key, value);
    this.head = node;
    this.last = node;
    this.cache = [key];
}

/**
 * 从栈中移除
 * 1. 栈满， 无法堆栈， 删除栈底
 * 2. 重复key， 查找删除
 * @param {*} key 
 */
LRUCache.prototype.delete = function(key) {
    // 栈中仅一个元素
    if (this.cache.length == 1) {
        this.deleteAll();
        return;
    }
    if (this.last.key == key) {
        this.deleteLast();
        return;
    }
    let point = this.head;
    while (point != null && point.key != key) {
        point = point.next;
    }
    point.prev.next = point.next;
    point.next.prev = point.prev;
    let index = this.cache.indexOf(key);
    this.cache.splice(index, 1);
}

LRUCache.prototype.deleteLast = function() {
    let node = this.last;
    this.last = node.prev;
    node.prev.next = null;
    node.prev = null;
    this.cache.shift();
}

LRUCache.prototype.deleteAll = function() {
    this.cache = [];
    this.head = null;
    this.last = null;
}

function Node (key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

