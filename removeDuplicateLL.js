'use strict';
function removeDuplicatLL(linkedList) {
  var hash = {};
  var prev = null;
  var node = linkedList;

  while (node.next !== null) {
    if (hash[node.val]) {
      prev.next = node.next;
    } else {
      hash[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
}