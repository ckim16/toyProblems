'use strict';
// using hash..
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

//no hash

function fundBeginning(linkedList) {
  var node1 = linkedList;
  var node2 = linkedList;

  //find meeting point
  while (node2.next !== null) {
    node1 = node1.next;
    node2 = node2.next;
    if (node1 === node2) {
      break;
    }
  }

  //if no meeting point, return null
  if (node2 === null) {
    return null;
  }

  //set node1 back to the head, now both node1 and node2 are k steps away from the beginning of the loop
  //so they must meet at the loop

  node1 = linkedList;
  if (node1 !== node2) {
    node1 = node1.next;
    node2 = node2.next;
  }

  return node2;
}