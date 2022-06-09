//trees
//methods =  search, insert, delete.
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.rigth = null;
    }    
}
class BinarySearchTree{
    constructor(){
        this.root = null;

    }
    insert(value){
        const newNode = new Node(value);
        if(this.root == null)
        {
            this.root = newNode
            return this
        }
        else
        {   
            let currentNode = this.root
            while(true)
            {
                if(value < currentNode.value)
                {
                    if(!currentNode.left)
                    {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left                    
                }
                else{
                    
                    if(!currentNode.rigth)
                    {
                        currentNode.rigth =  newNode
                        return this
                    }
                    currentNode = currentNode.rigth

                }
            }
        }
        
    }
    search(value){
        let currentNode = this.root
        while(true)
        {
            if(currentNode === null)
            {
                console.log("Value not found.")
                return this
            }    
            else
            {

                if(currentNode.value === null){

                    console.log("Empty tree.");
                }
                else if(value < currentNode.value)
                {
                    currentNode = currentNode.left;
                }
                else if(value > currentNode.value)
                {
                    currentNode = currentNode.rigth;
                }
                else
                {
                    return currentNode

                }
            }    
        }

    }

}
