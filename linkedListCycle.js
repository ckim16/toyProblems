'use strict';
function linkedListCycle(linkedList) {
  var pointer1 = linkedList;
  var pointer2 = linkedList;
  var pause = true;

  while(pointer1 = pointer1.next) {
    if(pointer1 === pointer2) {
      return true;
    }

    if(!pause) {
      pointer2 = pointer2.next;
    }
    pause = !pause;
  }
  return false;
}