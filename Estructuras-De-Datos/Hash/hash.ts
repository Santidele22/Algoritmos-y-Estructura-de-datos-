import { LinkedList } from "../Linkedlist/linkedlist.js";
class Hash {
    private bucket;
    private size;
    constructor(){
      this.size = 127
      this.bucket = new Array(this.size).fill(null).map(() => new LinkedList())
    }
  hashFunction(key) {
      let hash = 0;
      const length = this.bucket.length;
  
          for (let i = 0; i < key.length; i++) {
              hash += key.charCodeAt(i);
          }
          // Devolvemos el hash módulo la longitud de la tabla hash
          return hash % length;
  }
  set(object) {
      let key;
      let value
      if (typeof object === "object") {
          key = Object.keys(object)[0];
           value = object[key];
      } else {
          key = object;
      }
      const index = this.hashFunction(key);
      const linkedList = this.bucket[index];
      
      // Verificar si la clave ya existe en la lista enlazada
      let current = linkedList.head;
      while (current !== null) {
          if (current.value.key === key) {
              // Si la clave ya existe, actualizar el valor y salir
              current.value.value = value;
              return;
          }
          current = current.next;
      }
  
      // Si la clave no existe, agregar el nuevo par clave-valor al final de la lista
      linkedList.addToTheEnd({ key, value });
  }
    printHashTable() {
      this.bucket.forEach((linkedList, index) => {
          console.log(`LinkedList ${index}:`);
          console.log(linkedList);
          console.log('');
      });
  }
    getHashValues() {
        const allValues = [];
      this.bucket.forEach(linkedList => {
          let current = linkedList.getHead();
          while (current !== null) {
              allValues.push(current.value.value);
              current = current.next;
          }
      });
      return allValues;
    }
    getValue(key){
      const bucketLinkedList = this.bucket[this.hashFunction(key)];
      let current = bucketLinkedList.head;
  
      while (current !== null) {
          if (current.value.key === key) {
              return current.value.value;
          }
          current = current.next;
      }
  
      return undefined;
    }
    getSize(){
      return this.bucket.length
    }
  }
const newHash = new Hash();
