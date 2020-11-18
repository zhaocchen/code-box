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
    this.capacity = capacity;
    this.stack = [];
    this.cache = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.stack.includes(key)) return -1;
    let index = this.stack.indexOf(key);
    this.stack.splice(index, 1);
    this.stack.push(key);
    return this.cache[key]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.stack.includes(key)) {
        let index = this.stack.indexOf(key);
        this.stack.splice(index, 1);
        delete this.cache[key];
    }
    if (this.stack.length === this.capacity) {
        let lastKey = this.stack.shift();
        delete this.cache[lastKey]
    }
    this.stack.push(key);
    this.cache[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
