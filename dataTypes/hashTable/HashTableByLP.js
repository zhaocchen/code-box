

/**
 * 
 * simpleHash(data), 辅助函数， 进行hash处理
 * betterHash(data), 优化hash操作
 * put(data), 插入操作
 * get(data), 获取
 * showAll(), 展示全部数据
 */
function HashTable () {
    this.table = new Array(137);
}

HashTable.prototype.simpleHash = function (data) {
    // 除留余数法
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

HashTable.prototype.betterHash = function (data) {
    // 通过乘质数， 放大算法， 使得分布更加均匀 
    var H = 31;
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }
    if (total < 0) {
        total += this.table.length - 1;
    }
    return total % this.table.length;    
}

HashTable.prototype.buildChians = function () {
    // 开链法，一维转二维
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }

}

HashTable.prototype.put = function (data) {
    // 线性探测法 linear probing
    var pos = this.simpleHash(data); 
    if (this.table[pos] == undefined) {
        this.table[pos] = data;
    } else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = data;
    }
    
    
}

HashTable.prototype.get = function (key) {
    var hash = this.simpleHash(key);
    for (var i = hash; i< this.table.length; i++) {
        if (this.table[i] == key) {
            return i;
        }
    }
}

HashTable.prototype.showAll = function () {
    for(var i = 0; i < this.table.length; i++) {
        if(this.table[i] !== undefined) {
            console.log(this.table[i])
        }
    }
}

var hash = new HashTable();
hash.put('Jack');
hash.put('Lucy');
hash.put('Mery');
hash.put('Lily');

console.log(hash.get('Jack'));
console.log(hash.get('Lucy'));
console.log(hash.get('Mery'));
console.log(hash.get('Lily'));

hash.showAll();