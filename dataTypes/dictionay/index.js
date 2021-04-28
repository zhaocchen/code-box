
/**
 * set(key,value), 向字典中添加新元素。
 * remove(key), 通过使用键值来从字典中移除键值对应的数据值。
 * has(key), 如果某个键值存在于这个字典中，则返回true，反之则返回false。
 * get(key), 通过键值查找特定的数值并返回。
 * clear(), 将这个字典中的所有元素全部删除。
 * size(), 返回字典所包含元素的数量。与数组的length属性类似。
 * keys(), 将字典所包含的所有键名以数组形式返回。
 * values(), 将字典所包含的所有数值以数组形式返回。
 */
function Dictionay () {
    this.data = new Object();
    this.set = set;
    this.get = get;
    this.remove = remove;
    this.has = has;
    this.showAll = showAll;
    this.keys = keys;
    this.values = values;
    this.size = size;
    this.clear = clear;
}

function set (key, value) {
    this.data[key] = value;
}

function get (key) {
    return this.data[key];
}

function remove (key) {
    delete this.data[key];
}

function has (key) {
    return this.data.hasOwnProperty(key);
}

function keys () {
    return Object.keys(this.data);
}

function values () {
    return Object.values(this.data);
}

function showAll () {
    var dataKeys = Object.keys(this.data);
    for (var key of dataKeys) {
        console.log(key, this.get([key]));
    }
}

function size () {
    return Object.keys(this.data).length;
}

function clear () {
    var dataKeys = Object.keys(this.data);
    for (var key in dataKeys) {
        delete this.data[key];
    }
}

var dic = new Dictionay();
dic.set('a', 'hello');
console.log(dic.get('a'));
dic.showAll();