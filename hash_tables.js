//hash tables =  son similares a los objetos, manejan la esturtura key: value
{
    "nombre";"Diego",
    "nacionalidad";"Peruano"
}
//metodos

// insert =  inserta un elemento a la tabla.
//search = buscar un elemento por key.
//delete = borrar un elemento.
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethon(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash +  key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    set(key,value){
        const address = this.hashMethod(key);
        
    }
}