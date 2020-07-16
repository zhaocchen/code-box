

/**
 * size
 * add(element), 添加元素
 * delete(element), 删除元素
 * has(element), 是否存在元素
 * union，并集
 * intersection， 交集
 * difference， 补集
 * subset,
 */
function Sset() {
    this.data = [];
}

Sset.prototype.size = function () {
    return this.data.length;
}

Sset.prototype.add = function(element) {
    if (this.data.indexOf(element) < 0) {
        this.data.push(element);
    } else {
        return false;
    }
}

Sset.prototype.delete = function(element) {
    var pos = this.data.indexOf(element);
    if (pos > 0) {
        return this.data.splice(pos, 1)[0];
    } else {
        return false;
    }
}

Sset.prototype.showAll = function() {
    console.log(this.data);
}

Sset.prototype.has = function (element) {
    return this.data.indexOf(element) > 0;
}

Sset.prototype.union = function (otherSet) {
    var resSet = new Sset();
    for (var i = 0; i < this.data.length; i++) {
        resSet.add(this.data[i]);
    }
    for (var i = 0; i < otherSet.data.length; i++) {
        if (!resSet.has(otherSet.data[i])) {
            resSet.add(otherSet.data[i]);
        }
    }
    return resSet;
}

Sset.prototype.intersection = function (otherSet) {
    var resSet = new Sset();
    for (var i = 0; i < this.data.length; i++) {
        if (otherSet.has(this.data[i])) {
            resSet.add(this.data[i]);
        }
    }
    return resSet;
}

Sset.prototype.difference = function (otherSet) {
    var resSet = new Sset();
    for (var i = 0; i < this.data.length; i++) {
        if (!otherSet.has(this.data[i])) {
            resSet.add(this.data[i]);
        }
    }
    for (var i = 0; i < otherSet.length; i++) {
        if (!this.has(otherSet.data[i])) {
            resSet.add(otherSet.data[i]);
        }
    }
    return resSet;
}

Sset.prototype.subset = function (otherSet) {
    if (otherSet.size() > this.size()) {
        return false;
    }
    for (var i = 0; i < otherSet.length; i++) {
        if (this.has(otherSet.data[i])) {
            return false;
        }
    }
    return true;
}

// test

var ss = new Sset();
ss.add('a')
ss.add('b')
ss.add('c')

console.log(ss.delete('b'));
console.log(ss.delete('e'));

ss.showAll();