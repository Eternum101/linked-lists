const linkedList = require('./linked-list');

describe('#prepend', () => {
    test('Adds the Element to the Beginning of the List', () => {
        const ll = new linkedList();
        ll.prepend(10);
        const oldHead = ll.head;
        ll.prepend(20);

        expect(ll.head.value).toBe(20);
        expect(ll.head.next).toBe(oldHead);
        expect(ll.length).toBe(2);
    })
})

describe('#append', () => {
    test('Adds New Node to the End of the List', () => {
        const ll = linkedList.fromValues(10, 20);
        ll.append(30);

        const node = ll.getByIndex(2);
        expect(node.value).toBe(30);
        expect(node.next).toBeNull();
        expect(ll.length).toBe(3);
    })
})

describe('#size', () => {
    test('Returns the Total Number of Nodes in the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        expect(ll.size()).toBe(3);
    })
})

describe('#getHead', () => {
    test('Returns the First Node in the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const firstNode = ll.getHead();

        expect(firstNode.value).toBe(10);
    })
})

describe('#getTail', () => {
    test('Returns the Last Node in the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const firstNode = ll.getTail();

        expect(firstNode.value).toBe(30);
    })
})

describe('#pop', () => {
    test('Removes the Last Node from the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const lastNode = ll.pop();

        expect(lastNode.value).toBe(30);
        expect(ll.length).toBe(2);
    })
})

describe('#contains', () => {
    test('Returns True if the Given Value is in the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const isInList = ll.contains(20);

        expect(isInList).toBe(true);
    })

    test('Returns False if the Given Value is not in the List', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const isInList = ll.contains(40);

        expect(isInList).toBe(false);
    })
})

describe('#find', () => {
    test('Returns the Index of the Node Containing the Given Value', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const index = ll.find(20);

        expect(index).toBe(1);
    })

    test('Returns Null if the Given Value is not Found', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        const index = ll.find(40);

        expect(index).toBeNull();
    })
})

describe('#getByIndex', () => {
    describe('With Index Less than 0', () => {
        test('Returns Null', () => {
            const ll = linkedList.fromValues(10, 20);

            expect(ll.getByIndex(-1)).toBeNull();
        })
    })

    describe('With Index Greater than List Length', () => {
        test('Returns Null', () => {
            const ll = linkedList.fromValues(10, 20);

            expect(ll.getByIndex(5)).toBeNull();
        })
    })

    describe('With Index 0', () => {
        test('Returns the Head', () => {
            const ll = linkedList.fromValues(10, 20);

            expect(ll.getByIndex(0).value).toBe(10);
        })
    })

    describe('With Index in the Middle', () => {
        test('Returns the Element at that Index', () => {
            const ll = linkedList.fromValues(10, 20, 30, 40);

            expect(ll.getByIndex(2).value).toBe(30);
        })
    })   
})

describe('#insertAt', () => {
    describe('With Index Less than 0', () => {
        test('Does not Insert Anything', () => {
            const ll = linkedList.fromValues(10, 20);
            ll.insertAt(-1, 30);

            expect(ll.length).toBe(2);
        })
    })

    describe('With Index Greater than List Length', () => {
        test('Does not Insert Anything', () => {
            const ll = linkedList.fromValues(10, 20);
            ll.insertAt(5, 30);

            expect(ll.length).toBe(2);
        })
    })

    describe('With Index 0', () => {
        test('Insert At the Head', () => {
            const ll = linkedList.fromValues(10, 20);
            ll.insertAt(0, 30);

            expect(ll.head.value).toBe(30);
            expect(ll.head.next.value).toBe(10);
            expect(ll.length).toBe(3);
        })
    })

    describe('With Index in the Middle', () => {
        test('Insert at the Given Index', () => {
            const ll = linkedList.fromValues(10, 20, 30, 40);
            ll.insertAt(2, 50);
            const node = ll.getByIndex(2);

            expect(node.value).toBe(50);
            expect(node.next.value).toBe(30);
            expect(ll.length).toBe(5);
        })
    })
})

describe('#removeHead', () => {
    test('Removes the Head', () => {
        const ll = linkedList.fromValues(10, 20, 30);
        ll.removeHead();

        expect(ll.head.value).toBe(20);
        expect(ll.length).toBe(2);
    })
})

describe('#removeAt', () => {
    describe('With Index Less than 0', () => {
        test('Does not Remove Anything', () => {
            const ll = linkedList.fromValues(10, 20);
            ll.removeAt(-1);

            expect(ll.length).toBe(2);
        })
    })

    describe('With Index Greater than List Length', () => {
        test('Does not Remove Anything', () => {
            const ll = linkedList.fromValues(10, 20);
            ll.removeAt(-1);

            expect(ll.length).toBe(2);
        })
    })

    describe('With Index 0', () => {
        test('Remove the Head', () => {
            const ll = linkedList.fromValues(10, 20, 30);
            ll.removeAt(0);

            expect(ll.head.value).toBe(20);
            expect(ll.head.next.value).toBe(30);
            expect(ll.length).toBe(2);
        })
    })

    describe('With Index in the Middle', () => {
        test('Remove at the Given Index', () => {
            const ll = linkedList.fromValues(10, 20, 30, 40);
            ll.removeAt(2);
            const node = ll.getByIndex(1);

            expect(node.value).toBe(20);
            expect(node.next.value).toBe(40);
            expect(ll.length).toBe(3);
        })
    })
})
