'use strict';
function sumLinkedList(linkedList1, linkedList2) {
  // assume that you have all the helper functionsto build linkedList (add, reomove....)
  var node1 = linkedList1.head;
  var node2 = linkedList2.head;
  var node3 = new linkedList();
  var prev;
  var carry = 0;
  while (node1 !== null || node2 !== null) {
    var sum = carry + (node1 !== null ? node1.val : 0) + (node2 !== null ? node2.val : 0);

    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    sum = sum % 10;
    
    node3.add(sum);

    node1 = node1.next;
    node2 = node2.next;
  }
  if (carry > 0) {
    node3.add(carry);
  }

  return node3;
}