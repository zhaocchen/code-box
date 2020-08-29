
# 算法-排序:

### 1. 冒泡排序-bubbleSort, Time: O(n^2), Space: O(1)

冒泡排序，比较所有相邻的两项，若前大后小则交换。元素向上移动， 类似气泡上浮。

```
arr
for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
```
降序
```
arr
for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
```

### 2. 选择排序-selectionSort, Time: O(n^2), Space: O(1)

选择排序，原址比较。第i次寻找第i小的元素， 并放置第i位。

```
for (var i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    for (var j = i; j < arr.length; j++) {
        if (arr[indexMin] > arr[j]) {
            indexMin = j;
        }
    }
    if (i != indexMin) {
        swap(arr, i, indexMin);
    }
}
```

### 3. 插入排序-insertionSort, Time: O(n^2), Space: O(1)

每次排一个数组项。

```
for (var i = 0; i < arr.length; i++) {
    var tmp = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > tmp) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = tmp;
}
```

### 4. *希尔排序-shellSort, Time: O(n^2), Space: O(1)

插入排序的优化， 又称“缩小增量排序”。
把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。

```
for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < n; i++) {
        var temp = arr[i];
        let j = i;
        while (j >= gap && arr[j-gap] > temp) {
            arr[j] = arr[j-gap];
            j -= gap;
        }
        arr[j] = temp;
    }
}
```

### 5. 归并排序-mergeSort，Time: O(nlog(n)), Space: O(n)

分而治之， 切分成小数组（单元素）， 归并成大数组(双指针合并两个有序数组)。


// 拆分数组
```
if (arr.length == 1) {
    return arr;
}
var middle = Math.floor(arr.length / 2);
var leftArr = arr.slice(0, middle);
var rightArr = arr.slice(middle);

leftArr = mergeSort(leftArr);
rightArr = mergeSort(rightArr);

return mergeArr(leftArr, rightArr);
```

// 辅助函数
```
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) {
      res.push(rightArr[j]);
      j++;
    } else {
      res.push(leftArr[i]);
      i++;
    }
  }

  if (i == leftArr.length) {
    res.push(...rightArr.slice(j));
  }

  if (j == leftArr.length) {
    res.push(...leftArr.slice(i));
  }

  return res;
```


### 6. 快速排序-quicksort，Time: O(nlogn), Space: O(n)

分而治之， 拆分成小数组。

- Always pick first element as pivot.
- Always pick last element as pivot (implemented below)
- Pick a random element as pivot.
- Pick median as pivot.

```
var pivot = arr[left];
var i = start
var j = end;
while (i < j) {
    while (i < j && arr[j] >= pivot) j--;
    if (i<j) {
        arr[i] = arr[j];
        i++;
    }
    while (i < j && arr[i] < pivot) i++;
    if (i<j) {
        arr[j] = arr[i];
        j--;
    }
}
arr[i] = pivot;
```

### 7. *堆排序-heapSort， 不稳定, Space: O(nlogn), Time: O(1)
最大堆的堆顶是整个堆中最大元素。思路： 删除堆顶， 遍历交换成最大堆。

```
function heapify(arr, len, i) {
    let largest = i;
    let start = 2 * i +1;
    let end = 2 * i +2;
    if (start < len && arr[start] > arr[largest]) {
        largest = start;
    }
    if (end < len && arr[end] > arr[largest]) {
        largest = end;
    }
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, len, largest)
    }
    // console.log(n, i, arr)
}

function heapSort(arr) {
    let len = arr.length;
    for (var i = Math.floor(len / 2 -1); i >= 0; i--) {
        heapify(arr, len, i);
    }
    for (let i=len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}
```

/************ 分布式排序算法 ************/

### 8. *计数排序-countingSort, Time: O(n+k), Space: O(n+k)

```
let maxNum = Math.max(...arr);
let counts = new Array(maxNum+1).fill(0)
for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    counts[curNum]++;
}
let sortedIndex = 0;
for (let i = 0; i < counts.length; i++) {
    let curCount = counts[i];
    while (curCount > 0) {
        arr[sortedIndex++] = i;
        curCount--;
    }
}
```

### 9. 桶排序-bucketSort, 

### 10. 基数排序-radixSort, 




特征：
 大量重复元素（三路排序）
 近乎有序（插入排序）
 取值范围有限（计数排序）
 稳定排序（归并排序）
 链表存储（归并排序）
 大数据量，内存小（外排序）

优化:

- 空间和事件交换（哈希表）
- 预处理（如排序）

online judege:

- leetcode
- hackerrank

todo

玩转算法

算法面试
- 1-1