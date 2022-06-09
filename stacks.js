// stacks.
//Metodo pop = Remover el ultimo elemento.
//Metodo push = Agregar un elemento al final.
//metodo peek = tomar el ulitmo elemento de la linea.
// El stack basicamente es apilar elementos unos ensima de otros.
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0; 
    }
    peek(){
        return this.top;

    }
    push(value){
        const newNode =new Node(value);
        if (this.length === 0)
        {
            this.bottom = newNode;
            this.top = newNode;
        }
        else
        {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }
        this.length ++;
    }  
    pop()
    {   
        if(this.length === 0 ){
            console.log("NO tiene ningun elemento el stack")
        }
        else if(this.length === 1){
            this.top = null
            this.bottom = null
        }
        else{
            this.top = this.top.next
            this.length--;
        }
        return this
    } 

}