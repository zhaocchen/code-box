

### leecode

类别(算法,数据库,shell)
难度(Easy简单, Medium中等, Hard困难)

代码快速访问 https://github.com/daaasheng/leetcode/blob/master/level1/leet7.js

|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|168/171|Excel表序号|js|Easy|26进制|
|7|整数反转|Py2、js|Easy|取余、取整|
|9|回文数|js|Easy|整数反转|
|13|罗马数字转整数|py2、js|Easy|Map|
|66|加一|py2、js|Easy|操作list|
|67|二进制求和|py2|Easy|按位+|
|69|x的平方根|py2|Easy|牛顿迭代法<br />res = (res + x / res) / 2|
|119|杨辉三角|py2、js|Easy|迭代|
|189|旋转数组|js|Easy|Array.splice/slice/unshift|
|217|存在重复元素|py2、js|Easy|查重new Set([]).size|
|371|两整数之和（经典位运算）|js|Easy|sum = a ^ b<br />carry = (a & b) << 1|
|412|Fizz Buzz|py2、js|Easy|Array.from|
|415|字符串相加|js|Easy|按位+|
|628|三个数的最大乘积|js|Easy|*|
|771|宝石与石头|js|Easy|indexOf|
|836|矩形重叠|js|Easy|逆向思维|
|989|数组形式的整数加法|js|Easy|按位+|
|1266|访问所有点的最小时间|js|Easy|Math.abs(num)|
|1281|整数的各位积和之差|js|Easy|reduce|
|1295|统计位数为偶数的数字|js|Easy|数字转字符串 num+''|
|1313|解压缩编码列表|js|Easy|new Array(len).fill(num)|
|1342|将数字变成 0 的操作次数|js|Easy|while|
|1389|按既定顺序创建目标数组|js|Easy|[].splice(start, deleteCount, n1, n2,..)|
|1431|拥有最多糖果的孩子|js|Easy|Math.max(num1, num2, ..)|
|1450|在既定时间做作业的学生人数|js|Easy|for|
|1470|重新排列数组|js|Easy|[].push(e1, e2)|
|1480|一维数组的动态和|js|Easy|reduce|
|1486|数组异或操作|js|Easy|Array.from({length: len}, (v, i) => i)|
|1512|好数对的数目|js|Easy|for|
|1572|矩阵对角线元素的和|js|Easy|+=|
|1013|将数组分成和相等的三部分|js|Easy|for遍历数组|
|43|字符串相乘|py2|Medium|--|
|507|完美数|py2|Easy|欧几里得-欧拉定理|
|54|旋转矩阵|py2\题解|Medium|操作数组|
|56|合并区间|py2|Medium|排序+迭代|
|57|插入区间|py2|Hard|排序+迭代|
|+401|二进制手表|py2|Easy|--未完成--|
|70|矩阵置零|py2|Medium|遍历|
|1094（142周赛）| 拼车 |py2|Medium|乘车问题|
|78| 子集 |py2|Medium|组合|
|551| 学生出勤记录I | py2 | Easy | 内置函数 |
|121| 买卖股票的最佳时机 | py | Easy | -- |
|976| 三角形的最大周长 | py2 | Easy | -- |
|58| 最后一个单词的长度 | js | a | Array.split(reg) |
|151| 翻转字符串里的单词 | js | Medium | Array.reverse |
|819| 最常见的单词 | js | Easy | Map |
|8| 字符串转换整数 (atoi) | js | Medium | 判断细节处理 |
|349| 两个数组的交集 | js | Easy | set |
|299| 猜数字游戏 | js | Easy | 遍历字符串和数组 |
|165（经典）| 比较版本号<br />前端通用的版本比较 | Js | Medium | -- |

#### 查找(搜索)

| #    |   题目   |  语言   | 难度 | 注释 |
| :--- | :------: | :-----: | :--: | :--: |
| 1    | 两数之和 | js、py2 | Easy | map  |

#### 排序


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|75|颜色分类|py2|Medium|冒泡排序|
|179|最大数|py2、js|Medium|冒泡排序、sort|
|177| 第N高的薪水|sql|Medium|DESC LIMIT|
|561| [数组拆分I](<https://leetcode-cn.com/problems/array-partition-i/>) |py2|Easy|冒泡排序会超时，推荐sort\sorted|
|                   |                                                              |         |        |                                 |
|665| [非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/) |py2|Easy|移除间断点|
|81（147周赛精选）| 搜索旋转排序数组ii |py2|Medium|二分法搜索|
|153| 寻找旋转排序数组中的最小值 |js|Medium|*二分查找(有区别)|
|74| 搜索二维矩阵 |js|Medium|两层二分查找|
|448| 找到所有数组中消失的数字 |py2|Easy|超时，元素转索引|
|442| 数组中重复的数据 |py2|Medium|元素转索引|
|880|索引处的解码字符串|py2|Medium|逆向思维|
|440(158周赛精选)|字典序的第k小数字|py2|Hard|字典序|
|169|多数元素|js|Easy|摩尔投票|
|229|求众数II|js|Medium|摩尔投票|
|面试题13|机器人的运动范围？|js|Medium|DFS|

### 双指针（快慢指针、左右指针）

#### 快慢指针

- 判断链表中是否含有环
- 已知链表中含有环， 返回这个环的起始位置
- 寻找链表的中点
- 寻找链表的倒数第k个元素

#### 左右指针

- 二分法 (二分查找)
- 两数之和
- 反转数组
- 滑动窗口

| #    | 题目                           | 难度    | 语言   | 注释                 |
| ---- | ------------------------------ | ------- | ------ | -------------------- |
| 88   | 合并两个有序数组               | js/py2  | Easy   | 左右指针             |
| 977  | 有序数组的平方                 | js、py2 | Easy   | 左右指针             |
| m21  | 调整数组顺序使奇数位于偶数前面 | js      | Easy   | 左右指针             |
| 283  | 移动零                         | js      | Easy   | 左右指针             |
| 704  | 二分查找                       | js      | Easy   | 二分查找（快慢指针） |
| 268  | （查找）缺失数字               | js      | Easy   | 二分查找             |
| 278  | 第一个错误的版本               | js      | Easy   | 二分                 |
| 374  | 猜数字大小                     | js      | Easy   | 二分                 |
| 33   | 搜索旋转排序数组               | js、py2 | Medium | 二分查找             |
| m57  | 何为s的两个数字（有序数组）    | js      | Easy   | 左右指针-两数之和    |
|      |                                |         |        | 反转数组             |
| 3    | 无重复字符的最长子串           | js      | Medium | 滑动窗口             |
| 209  | 长度最小的子数组               | js      | Medium | 滑动窗口             |
| 424  | 替换后的最长重复字符           | ?       | Medium | 滑动窗口             |
| 1004 | 最大连续1的个数III             | js      | Medium | 滑动窗口             |
| 76   | 最小覆盖子串                   | ?       | Hard   | 滑动窗口             |

### 常见五大算法

- 分治
- 动态规划
- 贪心
- 回溯
- 支限


#### 分治法

| #    | 题目                     | 语言    | 难度 | 注释      |
| ---- | ------------------------ | ------- | ---- | --------- |
| 4    | 寻找两个有序数组的中位数 | js、py2 | Hard | 分治-二分 |
|      |                          |         |      |           |



#### 动态规划 DynamicProgramming

核心思想：

优势：

https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/




|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|509|斐波那契数(数列)|py2、js|Easy|dp[i] = i < 2 ? i : dp[i - 1] + dp[i - 2]|
|1137（147周赛）|第 N 个泰波那契数|py2、js|Easy|dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]|
|70（经典）| 爬楼梯 |py2、js|Easy|dp[i] = dp[i-1] + dp[i -2]|
|746| 使用最小花费爬楼梯 |py2|Easy|动态规划|
|198| 打家劫舍 |py2|Easy|动态规划|
|740| 删除与获得点数(打家劫舍) |py2|Medium|动态规划|
|53（经典）<br />剑指offer42| 最大子序列 |py2、js|Easy|Dp[i] = Math.max(dp[i-1]+nums[i], num[i])|
|152| 乘积最大子序列 |py2、js|Medium|Dp[i] = Math.max(dp[i-1]*nums[i], num[i])<br />由于负负得正需要一个最小子序列辅助|
|322（经典）| 零钱兑换 |py2、js|Medium|dp[i] = Math.min(dp[i], dp[i-coin] + 1)|
|343| 整数拆分 |js|Medium|dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])|
|377| 组合总和IV |py2|Medium|动态规划|
|62| 不同路径 |py2|Medium|动态规划|
|887| 扔鸡蛋（谷歌）? |js|Hard|动态规划|
|552| 学生出勤记录II ?| -- | Hard | 组合问题-动态规划 |

#### 贪心



#### 回溯算法Mediumacktracking

多叉树的深度优先遍历问题

var arr =[[‘A’,’B’],[‘a’,’b’],[1,2]] 求二维数组的全排列组合  结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2

```
    function dfs(arr, dep, solution, res) {
        // console.log(arr, dep, solution, res);
        if (dep == arr.length) {
            res.push(solution.join(''));
            return
        }
        for (var i = 0; i < arr[dep].length;i++) {
            solution.push(arr[dep][i]);
            dfs(arr, dep+1, solution, res);
            solution.pop();
        }
    }

function arrange(arr) {
    var res = [];
    dfs(arr, 0, [], res)
    return res;
}

var testArr =[['A','B'],['a','b'],[1,2]]
arrange(testArr)
```

- 题型一：排列、组合、子集相关问题

- 题型二：Flood Fill（洪水）

- 题型三：字符串中的回溯问题

- 题型四：游戏问题

| #          |       题目       | 语言 |  难度  |       注释       |
| :--------- | :--------------: | :--: | :----: | :--------------: |
| 面试38     |   字符串的排列   |  js  | Medium |     排列组合     |
| 46         |      全排列      |  js  | Medium |     排列组合     |
| 47         |    全排列 II     |  js  | Medium | 排列组合（修剪） |
| 39         |     组合总和     | py2  | Medium |     排列组合     |
| 40         |    组合总和II    | py2  | Medium |     排列组合     |
| 77         |                  |      |        |     排列组合     |
| 78         |                  |      |        |     排列组合     |
| 90         |                  |      |        |     排列组合     |
| 60         |                  |      |        |     排列组合     |
| 93         |    复原IP地址    |      | Medium |     排列组合     |
| 733        |                  |      |        |                  |
| 200        |                  |      |        |                  |
| 130        |                  |      |        |                  |
| 79         |                  |      |        |                  |
| 17         |                  |      |        |      字符串      |
| 784        |                  |      |        |      字符串      |
| 22         |                  |      |        |      字符串      |
| cal8queens |    八皇后问题    |  js  |  Easy  |     游戏问题     |
| 51         |                  |      |        |     游戏问题     |
|            |                  |      |        |    01背包问题    |
| 37         |                  |      |        |     游戏问题     |
| 388        |                  |      |        |     游戏问题     |
| 529        |                  |      |        |     游戏问题     |
| 784        | 字母大小写全排列 |  js  | Medium |       回溯       |

#### 分支

### 其他数据结构

#### 栈

| #    | 题目       | 语言 | 难度 | 注释 |
| ---- | ---------- | ---- | ---- | ---- |
| 20   | 有效的括号 | js   | Easy | 栈   |

#### 链表

链表, 线性数据结构。相比数组, 元素不存储在相邻位置， 通指针链接。

- 链表 LinkedList
- 双向链表 DoublyLinkedList
- 循环链表 CircularLinkedList
- 有序链表 SortedLinkedList
- 栈链表 StackLinkedList

优势：

1. 元素个数无上限。
2. 插入/删除元素， 无需创建空间， 无需移动插入位置以后的元素。

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
```

https://www.geeksforgeeks.org/data-structures/linked-list/

https://www.geeksforgeeks.org/linked-list-in-java/

代码快速访问 https://github.com/daaasheng/leetcode/blob/master/linkedList/leet2.js

| #                |           题目           | 语言 |  难度  |                          注释                          |
| :--------------- | :----------------------: | :--: | :----: | :----------------------------------------------------: |
| 2                |         两数相加         |  js  | Medium |                        链表合并                        |
| 206\剑指offer 24 |         反转链表         |  js  |  Easy  |                        链表反转                        |
| 1290             |     二进制链表转整数     |  js  |  Easy  |                        链表遍历                        |
| 83               | 删除排序链表中的重复元素 |  js  |  Easy  |                  链表删除（方法二？）                  |
| m2_1             |       移除重复节点       |  js  |  Easy  |                        快慢指针                        |
| 876              |      链表的中间节点      |  js  |  Easy  |                        快慢指针                        |
| m22              |   链表中倒数第k个节点    |  js  |  Easy  |                        快慢指针                        |
| 203              |       移除链表元素       |  js  |  Easy  | 哨兵节点<br />与快慢指针的区别的是否需要删除第一个元素 |
| m18              |      删除链表的节点      |  js  |  Easy  |                        哨兵节点                        |
| 160              |         相交链表         |  js  |  Easy  |                快慢指针（创建相交链表）                |
| 234              |         回文链表         |  js  |  Easy  |                  回文数组/链表反转？                   |
| 21               |     合并两个有序链表     |  js  |  Easy  |                    链表反转+双指针                     |
| 237              |     删除链表中的节点     | py2  |  Easy  |                        链表删除                        |
| 445              |       两数相加II?        | py2  | Medium |                                                        |
| 355              |        设计推特?         |  js  | Medium |                     (应用)增删改查                     |
| 141              |         环形链表         |  js  |  Easy  |                        快慢指针                        |

反转链表

```
var reverseList = function(head) {
    var prev = null
    var cur = head
    var next = null
    while (cur != null) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};

var reverseList = function(head) {
    if (head == null || head.next == null) return head
    var reverseedList = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reverseedList
};
```



#### 二叉树Tree

Traversals遍历二叉树(先序遍历, 中序遍历, 后序遍历, 深度优先DFS, 广度优先BFS)

- PreOrder 先序遍历: 根节点 -> 左子树 -> 右子树 (DFS)
- InOrder 中序遍历：左子树 -> 根节点 -> 右子树  (DFS)
- PostOrder 后序遍历：左子树 -> 右子树 -> 根节点  (DFS)
- LevelOrder 层序遍历 (BFS)

[geeksforgeeks-tree](https://www.geeksforgeeks.org/binary-tree-data-structure/)

[lectures/Trees](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
```



| #    | 题目                 | 语言    | 难度   | 注释     |
| ---- | -------------------- | ------- | ------ | -------- |
| 226  | 翻转二叉树           | py2、js | Easy   | dfs      |
| 236  | 二叉树的最近公共祖先 | js      | Medium | LCA 问题 |

#### 二叉搜索树BST

二叉搜索树：一种基于节点的二叉树数据结构。具有如下特点:

- 节点的左子树只包含键值小于节点键值的节点。
- 节点的右子树只包含键值大于节点键值的节点。
- 左右子树也必须是二叉搜索树。

| #    | 题目                     | 语言 | 难度 | 注释   |
| ---- | ------------------------ | ---- | ---- | ------ |
| 538  | 把二叉搜索树转换为累加树 | js   | Easy | dfs    |
| 701  | 二叉搜索树中的插入操作   | js   | Easy | insert |

完全二叉树（Complete Binary Tree）：

若设二叉树的深度为h

1.  (1～h-1) 各层的结点数都达到最大个数。
2.  第 h 层所有的结点都连续集中在最左边。

因此。如果根节点存储在索引i中，那么它的左子节点和右子节点分别存储在索引2*i+1、2*i+2中。



满二叉树（Full Binary Tree）：

每个节点都有0或2个子节点



平衡二叉树：

一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过1。


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|965| 单值二叉树 |py2|a|创建二叉树|
|101| 对称二叉树 |py2|a|遍历二叉树|
|102| 二叉树的层序遍历 |py2|Medium|层序遍历|
|107|  ||||
|637| [二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/) |py2|a|层序遍历|
|110| 平衡二叉树 |py2|a|DFS|
|662| 二叉树最大宽度 |py2|Medium|DFS(一些节点为空)，creatTree不适用|
|617| 合并二叉树 |py2|a|遍历二叉树|
|1184(153周赛)| 公交站间的距离 |py2|a|--|
|1185(153周赛)| 一周中的第几天 |py2|a|Zeller公式：w=([c/4]-2c+y+[y/4]+[13(m+1)/5]+d-1)mod7<Mediumr />注：1582-10-15之后|
|1186| 删除一次得到子数组最大和 ||Medium||
|1187| 使数组严格递增 ||Hard||

### 其他

#### 内置方法

| #    | 题目     | 语言 | 难度 | 注释        |
| ---- | -------- | ---- | ---- | ----------- |
| 0519 | 寻找组合 | js   | --   | （应用）Map |

#### 实现内置方法

| #        | 题目             | 语言 | 难度   | 注释                                     |
| -------- | ---------------- | ---- | ------ | ---------------------------------------- |
| 50       | 幂函数 Pow(x, n) | Js   | Medium | x ** n<br />快速幂                       |
| ~~1108~~ | ~~IP地址无效化~~ |      |        |                                          |
| m5       | 替换空格         | js   | a      | spilt().join()<br/>replace(/\/g, newStr) |
|          |                  |      |        |                                          |





#### 数学问题


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|204|计数质数|js|easy|-|
|342|4的幂|py2|Easy|检查一个数是否为 2 的幂：x > 0 and (x & (x - 1)) == 0<br />若 xx 为 2 的幂且 x%3 == 1，则 xx 为 4 的幂|
|m57_2|和为s的连续正数序列|js|a|连续数字求和公式|
|（经典）|线段是否相交|||isIntersect， 向量（几何）|
|面试题 16.03. 交点| 交点 |js|Hard|intersection|

#### 统计

- 平均值
- 中位数
- 众数

#### 数组

字典序： ....

- 二分法搜索(长度大于1)

```
function bs(nums, target, start_index, end_index) {
  while(start_index <= end_index) {
    mid_index = (start_index+end_index) / 2
    cur_num = nums[mid_index]
    if (target == cur_num) {
      return mid_index
    } else if (target < cur_num) {
      end_index = mid_index - 1
    } else {
      start_index = mid_index + 1
    }
  }
  return -1
}

=======================递归写法==============================
function bs(nums, target, start_index, end_index) {
  if(start_index > end_index) {
    return -1
  }
  mid_index = (start_index+end_index) / 2
  cur_num = nums[mid_index]
  if (target == cur_num) {
    return mid_index
  } else if (target < cur_num) {
    return bs(nums, target, start_index, mid_index - 1)
  } else {
    return bs(nums, target, mid_index + 1, end_index)
  }
}

```

动态规划：

1. 状态
2. 状态转移方程



