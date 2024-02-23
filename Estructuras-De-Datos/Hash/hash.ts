class Hash {
  private bucket: LinkedList[];
  private size: number;

  constructor() {
      this.size = 127;
      this.bucket = new Array(this.size).fill(null).map(() => new LinkedList());
  }

  hashFunction(obj: any): number {
      const objString = Object.keys(obj)
          .map(key => `${key}:${obj[key]}`)
          .join("|");
      console.log("objString", objString);
      let hash = 0;
      const length = this.bucket.length;
      for (let i = 0; i < objString.length; i++) {
          hash += objString.charCodeAt(i);
      }
      // Devolvemos el hash módulo la longitud de la tabla hash
      return hash % length;
  }

  set(object: any) {
      let key, value;
      if (typeof object === "object") {
          key = Object.keys(object)[0];
          value = object[key];
      } else {
          key = object;
          value = object;
      }
      const index = this.hashFunction(object);
      const linkedList = this.bucket[index];
      let current = linkedList.getHead();
      while (current !== null) {
          if (current.value.key === key) {
              current.value.value = value;
              return;
          }
          current = current.next;
      }
      linkedList.addToTheEnd({ key, value });
  }

  public delete(keyObject: any) {
      let key;
      let value;
      if (typeof keyObject === "object") {
          key = Object.keys(keyObject)[0];
          value = keyObject[key];
      } else {
          key = keyObject;
      }
      const index = this.hashFunction(key);
      const linkedList = this.bucket[index];
      console.log("linkedList: ", linkedList);
      console.log("key:", key);
      linkedList.remove(key);
  }

  printHashTable() {
      this.bucket.forEach((linkedList, index) => {
          console.log(`LinkedList ${index}:`);
          console.log(linkedList);
          console.log('');
      });
  }

  getHashValues(): any[] {
      const allValues:Array<any> = [];
      this.bucket.forEach(linkedList => {
          let current:Nodes | null = linkedList.getHead();
          while (current !== null) {
              allValues.push(current.value.value);
              current = current.next;
          }
      });
      return allValues;
  }

  getValue(key: string): any {
      const bucketLinkedList = this.bucket[this.hashFunction(key)];
      let current = bucketLinkedList.getHead();

      while (current !== null) {
          if (current.value.key === key) {
              return current.value.value;
          }
          current = current.next;
      }

      return undefined;
  }

  getSize(): number {
      return this.bucket.length;
  }
}

export class LinkedList {
  private head: Nodes | null;
  private tail: Nodes | null;
  private index: number;

  constructor() {
      this.head = null;
      this.tail = null;
      this.index = 0;
  }

  public addToTheEnd(node: any) {
      const newNode = new Nodes(node, null);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          this.index++;
          return;
      } else {
          this.tail!.next = newNode;
          this.tail = newNode;
      }
      this.index++;
  }

  public addToTop(node: any) {
      const newNode = new Nodes(node, null);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          this.index++;
          return;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
      this.index++;
  }

  public removeTail() {
      if (!this.head) {
          //Si no hay nada solo retorno
          return;
      } else if (!this.head.next) {
          // Si hay solo un nodo en la lista
          this.head = null;
          this.tail = null;
      } else {
          let pre = this.head;
          let aux = this.head.next;
          while (aux!.next !== null) {
              pre = aux;
              aux = aux!.next;
          }
          console.log("El elemento borrado es " + aux.value);
          pre.next = null;
          this.tail = pre;
          this.index--;
          console.log("El nuevo tail es este  " + this.tail.value);
      }
  }

  public removeHead() {
      //Si no hay nada retornar
      if (!this.head) return;
      //Si hay un solo elemento
      if (!this.head.next) {
          this.head = null;
          this.tail = null;
      }
      const aux = this.head;
      console.log("Elemento borrado " + aux?.value);
      this.head = this.head!.next;
      console.log("El nuevo head es " + this.head?.value);
      this.index--;
      return aux;
  }

  public remove(node: string) {
      console.log("nodeLinkedlistRemove:", node);
      console.log("HeadLinkedlistRemove:", this.head?.value.value.toLowerCase());
      if (!this.head) {
          return;
      }
      // Si el nodo se encuentra al principio
      if (this.head.value.value.toLowerCase() === node.toLowerCase()) {
          this.head = this.head.next;
          if (!this.head) {
              this.tail = null;
          }
          this.index--;
          return;
      }

      let aux = this.head?.next;
      let pre = this.head;
      while (aux !== null) {
          if (aux.value.value.toLowerCase() === node.toLowerCase()) {
              if (aux.value.value.toLowerCase() === this.tail?.value.value.toLowerCase()) {
                  pre.next = null;
                  this.tail = pre;
              } else {
                  pre.next = aux.next;
              }
              this.index--;
              console.log("El valor de tail es " + this.tail?.value.value);
              return;
          }
          pre = aux;
          aux = aux.next;
      }
  }

  public getLinkedlist() {
      let aux = this.head;
      if (!aux) {
          return;
      } else if (aux && aux.next === null) {
          console.log(aux);
          return;
      } else {
          while (aux!.next !== null) {
              console.log(aux);
              aux = aux!.next;
          }
          console.log(aux);
      }
  }

  public getIndex() {
      return this.index;
  }

  public find(
      value: string | undefined = undefined,
      callback: Function | undefined = undefined
  ): Nodes | null {
      if (!this.head) {
          return null;
      }
      let current:Nodes | null = this.head;
      if (callback) {
          while (current) {
              if (callback(current.value)) {
                  return current;
              }
              current = current.next;
          }
      } else if (value !== undefined) {
          while (current) {
              if (current.value.toLocaleLowerCase() === value.toLocaleLowerCase()) {
                  return current;
              }
              current = current.next;
          }
      }

      return null;
  }
  getHead(){
    return this.head
  }
}

class Nodes {
  public next: Nodes | null;
  public value: any;
  constructor(value: any, next: Nodes | null) {
      this.value = value;
      this.next = next;
  }
}
