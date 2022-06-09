class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MySinglyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
  
      this.length = 1;
    }
    append(value) {
      const newNode = new Node(value);
  
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  
      return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next =this.head;
        this.head = newNode;
        this.length++;
        
        return this
    }
    insert(index,value){
        if(index >= this.length){
            return this.append(value)
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
        getTheIndex(index){
            let counter = 0
            let currentNode = this.head;

            while (counter != index) {
                currentNode = currentNode.next;
                counter++;
            }
       }
       remove(value){
           if (this.length <= 1)
            {
                console.log("La link list debe tener mas de un elemento.")
                return null
            }
            let counter = 0
            let currentNode = this.head
            let lastNode = this.head
            while(value != currentNode.next.value)
            {
                
                currentNode = currentNode.next
                lastNode = currentNode.next
                lastNode = lastNode.next
                counter++;
                if(counter > this.length)
                {
                    console.log("No se encontro el elemto en la linkedlist");            
                    break
                }
            }
            currentNode.next = lastNode
            this.append(value)
            this.length --;
            return this 
            
       }

}
let myLinkedList = new MySinglyLinkedList(1);