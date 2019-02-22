// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoSortedLists(l1, l2) {
  // if (!l1) return l2;
  // if (!l2) return l1;

  // let dummyNode = new ListNode(0);
  // let cur = dummyNode;
  
  // while (l1 && l2) {
  //   if (l1.val < l2.val) {
  //     l1 = l1.next;
  //   } else {
  //     cur.next = l2;
  //     const l2Next = l2.next;
  //     l2.next = l1;
  //     l2 = l2Next;
  //   }

  //   cur = cur.next;
  // }
  // // either l1 or l2 might end first
  // cur.next = l1 || l2;
  // return dummyNode.next;


  //recursive

  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next  = mergeTwoSortedLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoSortedLists(l1, l2.next);
    return l2;
  }
}