// Queues--- Estructura de datos que  funciona como una fila, el primerer elemento que  entra es el primero que sale.
class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;     
    }
    peek(){
        return this.first;
    }
    endqueue(value){
        const newNode = new Node(value);
        if (this.length == 0)
        {
            this.first = newNode;
            this.last = newNode;
        }
        else
        {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++;
        
        return this
    }
    dequeue(){
            if(this.length === 0)
            {
                console.log("Empty queue!");

            }else if(this.length === 1)
            {
                this.first == null;
                this.last == null;
                this.length --;   
            }else
            {
                this.first = this.first.next;
                this.length --;
            }
            
    }
}
const myQueue = new Queue();
