export class LinkedList {
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
    if (!this.head) {
      return;
    }
    //Si el nodo se encuentra al principio
    if (this.head.value.toLowerCase() === node.toLowerCase()) {
      this.head = null;
      this.tail = null;
    }

    let aux = this.head?.next;
    let pre = this.head;

    while (aux !== null) {
      if (node.toLowerCase() === aux?.value.toLowerCase()) {
        if (
          aux.value.toLowerCase() === this.tail?.value.toLowerCase()
        ) {
          console.log("Entra en el if ");
          pre!.next = aux.next;
          this.tail = pre;
        }
        pre!.next = aux.next;
      }
      pre = aux!;
      aux = aux?.next;
    }
    this.index--;
    console.log("El valor de tail es " + this.tail?.value);
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
  public getHead() {
    return this.head;
  }
  public find(
    value: string | undefined = undefined,
    callback: ((value: string) => boolean) | undefined = undefined
  ) {
    if (!this.head) {
      return null;
    }
    let current: Nodes | null = this.head;
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
newLinkedlist.addToTheEnd("sexto Nodo");
newLinkedlist.addToTheEnd("septim0 Nodo");
newLinkedlist.addToTheEnd("octavo Nodo");
newLinkedlist.addToTheEnd("noveno Nodo");
newLinkedlist.addToTheEnd("decimo Nodo");
newLinkedlist.addToTop("cero Nodo");
newLinkedlist.remove("DeCiMo NODO");
console.log(newLinkedlist.getIndex());
console.log(newLinkedlist.getLinkedlist());
