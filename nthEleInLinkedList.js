'use strict';
function nthEleInLL(linkedList, n) {
  var num = 0;
  var hash = {};
  var node = linkedList;

  while (node.next !== null) {
    hash[num] = node;
    num++;
    node = node.next;
  }
  hash[num] = node;
  return hash[num - n];
}