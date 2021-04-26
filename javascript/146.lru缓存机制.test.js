

// var lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCache.get(1));    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.get(2));    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCache.get(1))
// console.log(lRUCache.get(3))
// console.log(lRUCache.get(4))

// console.log(lRUCache)


// ["LRUCache","get","put","get","put","put","get","get"]
// ' +
//   '[[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]

var lRUCache = new LRUCache(2);
console.log(lRUCache.get(2));
lRUCache.put(2, 6);
console.log(lRUCache.get(1));
lRUCache.put(1, 5);
lRUCache.put(1, 2);
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));

console.log(lRUCache)




