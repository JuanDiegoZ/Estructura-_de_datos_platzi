// Construyen un array en js
//Clase que funciona como una array para entender su funcionamiento.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
class MyArray{
 constructor(){
     this.length = 0;
     this.data = {}
 }   
 get(index){
     return this.data[index];
 }
 push(){
    this.data[this.length] = items;
    this.length++;
    return this.data 
 }

}
const myArray = new MyArray; 
//Eliminando elemtos de un Array
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }   
    get(index){
        return this.data[index];
    }
    push(){
       this.data[this.length] = items;
       this.length++;
       return this.data 
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
   }