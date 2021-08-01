

// Step 1: creating linked list 

class Node {
    constructor(number) {
        this.data = number 
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null 
        this.tail = null
    }

    addNode(number) {
        // console.log('adding node')
        let node = new Node(number);

        // Is it currently empty?
        if(!this.tail) {
            // Head and tail become one and the same
            this.head = this.tail = node;
            // console.log('this.head = ', this.head)
            // console.log('this.tail = ', this.tail)
            return node;
        }

        // If it's not empty, tack this on the end,
        // and update `tail` to point at this new node
        this.tail.next = node;
        this.tail = node;
        // console.log(node)
        // console.log(this.tail)

        // Return the node we added
        return node;
    }
}

const linked_list = new LinkedList()

for (let i = 0; i <= 100; i++) {
    linked_list.addNode(i)
}

// console.log(linked_list.head)

// Step 2: creating contains cycle function

const containsCycle = (node) => {
    return false
}

containsCycle(linked_list.head)

// Step 3: running the function on the linked list