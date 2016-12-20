'use strict';
function removeMiddle(linkedListCenter) {
    var node = linkedListCenter;

    var next = linkedListCenter.next;

    node.val = next.val;
    node.next = next.next;
}