'use strict';
function sumLinkedList(linkedList1, linkedList2) {
  var linkedList3 = new linkeList();

  var node1 = linkedList1.head;
  var node2 = linkedList2.head;
  var carry = 0;
  while (node1 !== null && node2 !== null) {
    var sum = node1.val + node2.val + carry;

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    node3.add(sum);

    node1 = node1.next;
    node2 = node2.next;
  }

  if (node1.next !== null) {
    while (node1.next !== null) {
      if (carry === 1) {
        node3.add(node1.next.val + carry);
      } else {
        node3.add(node1.next.val);
      }
    }
  }

  if (node2.next !== null) {
    while (node2.next !== null) {
      if (carry === 1) {
        node3.add(node2.next.val + carry);
      } else {
        node3.add(node3.next.val);
      }
    }
  }

  if (carry === 1) {
    node3.add(carry);
  }
  return node3;
}