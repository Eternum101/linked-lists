class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new linkedListNode(data, this.head);
        this.head = newNode;
        this.length++; 
    }

    append(data) {
        const newNode = new linkedListNode(data, null);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }

    pop() {
        if (!this.head) return null;

        if(!this.head.next) {
            const lastNode = this.head;
            this.head = null;
            this.length--;
            return lastNode;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        const lastNode = current.next;;
        current.next = null;
        this.length--;
        return lastNode;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    insertAt(index, value) {
        if (index === 0) return this.prepend(value);

        const prev = this.getByIndex(index - 1);
        if (prev == null) return null;

        prev.next = new linkedListNode(value, prev.next);
        this.length++;
    }

    removeAt(index) {
        if (index === 0) return this.removeHead();

        const prev = this.getByIndex(index - 1);
        if (prev == null) return null;

        prev.next = prev.next.next;
        this.length--;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next; 
        }
        return current;
    }

    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next;
        }
        console.log(`${output}null`);
    }
}

class linkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

linkedList.fromValues = function(...values) {
    const ll = new linkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.prepend(values[i]);
    }
    return ll; 
}

module.exports = linkedList;