const linkedList = require('./linked-list');

const ll = linkedList.fromValues(10, 20, 30, 40);
ll.toString();
console.log(ll.getByIndex(2).value);