// ADD FRONT!

class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // REMOVE FRONT!----------------------------------------------------------------->

    removeFront() {
        if(this.head == null){
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    // FRONT!--------------------------------------------------------------------------->

    front() {
        if(this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
        //Ternary operator: condition ? value_if_true  : value_if_false
        return this.head ? this.head.value : null;
    }
}

var mySLL = new SLL();

// console.log(mySLL.front());
// mySLL.addFront(10);
// console.log(mySLL.front());
// mySLL.addFront(5);
// mySLL.addFront(3);
// console.log(mySLL);
// mySLL.removeFront();

// console.log(mySLL);
// console.log(mySLL.head.next); 



