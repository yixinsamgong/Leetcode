/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while( l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            tail.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            tail.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1 != null) tail.next = l1;
    if (l2 != null) tail.next = l2;
    return dummy.next;
}