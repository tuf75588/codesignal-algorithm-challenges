/* Some phone usage rate may be described as follows:

    first minute of a call costs min1 cents,
    each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    each minute after 10th costs min11 cents.

You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have? */

function phoneCall(min1, min2_10, min11, s) {
  //! find the longest duration phone call you can have.
  let mins = 0;
  if (s >= min1) mins = 1;
  if (s >= min1 + 9 * min2_10) {
    //we can talk for at least 10 minutes.
    mins = Math.floor((s - min1 - 9 * min2_10) / min11) + 10;
  } else {
    mins = Math.floor((s - min1) / min2_10) + 1;
  }

  return mins;

  //! way overkill linked-list solution below.
  /*   function Node(value) {
    this.value = value;
    this.next = null;
  }
  function FishHook(a, b, c) {
    //! a b and c will represent min1,min2_10,min11
    this.head = null;

    let prevNode = new Node(a);
    this.head = prevNode;
    //filling in the values of 2-10
    for (let i = 1; i < 10; i++) {
      const node = new Node(b);
      prevNode.next = node;
      prevNode = node;
    }
    const lastNode = new Node(c);
    prevNode.next = lastNode;
    lastNode.next = lastNode;
    this.appraise = function(value) {
      let node = this.head;
      for (let howMany = 0; ; howMany++) {
        if (value < node.value) return howMany;
        value -= node.value;
        node = node.next;
      }
    };
  }
  let hook = new FishHook(min1, min2_10, min11);
  return hook.appraise(s); */
}

console.log(phoneCall(10, 1, 2, 22));
//! 10c for min1
//! 1c for min2_10
//! 2c for min11+

//! after 1 minute we are left with 12c.
//! after another 9 minutes we are left with 3c
//! with 3 cents left, we can afford one final minute before a balance less than the minimum price.

//2345678910
