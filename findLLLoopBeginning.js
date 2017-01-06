'use strict';
function findLoopBeginning(linkedList) {
  // always check edge cases!!
  var hash = {};
  var node = linkedList;

  while (node !== null) {
    if (!hash[node.val]) {
      hash[node.val] = true;
    } else {
      if (hash[node.next]) {
        return node.next;
      }
    }
  }
}