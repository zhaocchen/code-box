

/**
 * 
 * simpleHash(data), 辅助函数， 进行hash处理
 * betterHash(data), 优化hash操作
 * buildChians(), 开辟新链，初始化需要调用
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
    // var pos = this.simpleHash(data);
    // var pos = this.betterHash(data);
    // this.table[pos] = data;
    // 碰撞，若存在， 顺次后移
    var pos = this.simpleHash(data);
    
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index] = data;
        index++;
    } else {
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index] = data;
    }

}

HashTable.prototype.get = function (key) {
    var hash = this.simpleHash(key);
    for (var i = 0; i< this.table[hash].length; i++) {
        if (this.table[hash][i] == key) {
            return [hash, i];
        }
    }
}

HashTable.prototype.showAll = function () {
    for(var i = 0; i < this.table.length; i++) {
        if(this.table[i][0] !== undefined) {
            console.log(this.table[i])
        }
    }
}

var hash = new HashTable();
hash.buildChians();
hash.put('Jack');
hash.put('Lucy');
hash.put('Mery');
hash.put('Lily');

console.log(hash.get('Jack'));
console.log(hash.get('Lucy'));
console.log(hash.get('Mery'));
console.log(hash.get('Lily'));

hash.showAll();