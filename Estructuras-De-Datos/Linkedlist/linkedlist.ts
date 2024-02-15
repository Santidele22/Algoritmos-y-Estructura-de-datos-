class LinkedList {
  private head: Nodes | null;
  private tail: Nodes | null;
  private index: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.index = 0;
  }
  public addToTheEnd(node: string) {
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
  public addToTop(node: string) {
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
    if(!this.head){
      //Si no hay nada solo retorno
      return
    } else if (!this.head.next) {
      // Si hay solo un nodo en la lista
      this.head = null;
      this.tail = null;
    }else{
      let pre = this.head
      let aux = this.head.next;
      while (aux!.next !== null) {
        pre = aux;
        aux = aux!.next;
      }
      console.log("El elemento borrado es " + aux.value)
      pre.next = null
      this.tail = pre
      console.log("El nuevo tail es este  " + this.tail.value)
    }
  }
  public removeHead() {}
  public remove() {}

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
}
class Nodes {
  public next: Nodes | null;
  public value: string;
  constructor(value: string, next: Nodes | null) {
    this.value = value;
    this.next = next;
  }
}

const newLinkedlist = new LinkedList();
newLinkedlist.addToTheEnd("primer Nodo");
newLinkedlist.addToTheEnd("segundo Nodo");
newLinkedlist.addToTheEnd("tercer Nodo");
newLinkedlist.addToTheEnd("cuarto Nodo");
newLinkedlist.addToTop("quinto Nodo");
newLinkedlist.removeTail();
newLinkedlist.removeTail();
console.log(newLinkedlist.getIndex());
console.log(newLinkedlist.getLinkedlist());
