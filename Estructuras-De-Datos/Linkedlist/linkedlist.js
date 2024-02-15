var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.index = 0;
    }
    LinkedList.prototype.addToTheEnd = function (node) {
        var newNode = new Nodes(node, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.index++;
            return;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.index++;
    };
    LinkedList.prototype.addToTop = function (node) {
        var newNode = new Nodes(node, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.index++;
            return;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.index++;
    };
    LinkedList.prototype.removeTail = function () {
        if (!this.head) {
            //Si no hay nada solo retorno
            return;
        }
        else if (!this.head.next) {
            // Si hay solo un nodo en la lista
            this.head = null;
            this.tail = null;
        }
        else {
            var pre = this.head;
            var aux = this.head.next;
            while (aux.next !== null) {
                pre = aux;
                aux = aux.next;
            }
            console.log("El elemento borrado es " + aux.value);
            pre.next = null;
            this.tail = pre;
            console.log("El nuevo tail es este  " + this.tail.value);
        }
    };
    LinkedList.prototype.removeHead = function () { };
    LinkedList.prototype.remove = function () { };
    LinkedList.prototype.getLinkedlist = function () {
        var aux = this.head;
        if (!aux) {
            return;
        }
        else if (aux && aux.next === null) {
            console.log(aux);
            return;
        }
        else {
            while (aux.next !== null) {
                console.log(aux);
                aux = aux.next;
            }
            console.log(aux);
        }
    };
    LinkedList.prototype.getIndex = function () {
        return this.index;
    };
    return LinkedList;
}());
var Nodes = /** @class */ (function () {
    function Nodes(value, next) {
        this.value = value;
        this.next = next;
    }
    return Nodes;
}());
var newLinkedlist = new LinkedList();
newLinkedlist.addToTheEnd("primer Nodo");
newLinkedlist.addToTheEnd("segundo Nodo");
newLinkedlist.addToTheEnd("tercer Nodo");
newLinkedlist.addToTheEnd("cuarto Nodo");
newLinkedlist.addToTop("quinto Nodo");
newLinkedlist.removeTail();
newLinkedlist.removeTail();
console.log(newLinkedlist.getIndex());
console.log(newLinkedlist.getLinkedlist());
