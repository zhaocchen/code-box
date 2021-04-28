

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// function createList (num) {
//     let head
//     while (num > -1) {
//         // let randomNum = Math.floor(Math.random() * 100)
//         let randomNum = num
//         if (head == null) {
//             head = new ListNode(randomNum)
//         } else {
//             let next = head
//             head = new ListNode(randomNum)
//             head.next = next
//         }
//         num--
//     }
//     return head
// }

function createList (num) {
    let head = node = new ListNode()
    let count = 0
    while (count < num) {
        let randomNum = count
        node.val = randomNum
        node.next = new ListNode()
        node = node.next
        count++
    }
    return head
}

var list = createList(3)

console.log(list)
