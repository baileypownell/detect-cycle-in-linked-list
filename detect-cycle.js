

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
        let node = new Node(number);

        // Is it currently empty?
        if(!this.tail) {
            // Head and tail become one and the same
            this.head = this.tail = node;
            return node;
        }

        // If it's not empty, tack this on the end,
        // and update `tail` to point at this new node
        this.tail.next = node;
        this.tail = node;

        // Return the node we added
        return node;
    }
}

const linked_list = new LinkedList()

for (let i = 0; i <= 100; i++) {
    linked_list.addNode(i)
}

// a linked list with a loop will NOT have a tail, i.e. it will not have a node whose "next" === null

// Step 2: creating contains cycle function, using the tortoise/hare alogrithm
const containsCycle = (headNode) => {
    let hare = headNode
    let tortoise = headNode

    while (hare != null && hare.next !== null) {
        hare = hare.next.next 
        tortoise = tortoise.next 
        if (tortoise === hare) {
           return true 
        }
    }
    return false
}

// LINE TO MAKE THIS CIRCULAR: 
// linked_list.tail.next = linked_list.head

// Step 3: running the function on the linked list
const has_cycle = containsCycle(linked_list.head)

if (has_cycle) {
    console.log('Cycle found.')
} else {
    console.log('There is no cycle.')
}