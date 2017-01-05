'use strict';
function removeDuplicatLL(linkedList) {
  var hash = {};
  var prev = null;
  var node = linkedList;

  while (node.next !== null) {
    if (!hash[node.val]) {
      hash[node.val] = true;
    } else {
      prev.next = node.next;
    }
    prev = node;
    node = node.next;
  }
}