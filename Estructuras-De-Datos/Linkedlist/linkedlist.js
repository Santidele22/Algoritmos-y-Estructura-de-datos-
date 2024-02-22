"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
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
            this.index--;
            console.log("El nuevo tail es este  " + this.tail.value);
        }
    };
    LinkedList.prototype.removeHead = function () {
        var _a;
        //Si no hay nada retornar
        if (!this.head)
            return;
        //Si hay un solo elemento
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        }
        var aux = this.head;
        console.log("Elemento borrado " + (aux === null || aux === void 0 ? void 0 : aux.value));
        this.head = this.head.next;
        console.log("El nuevo head es " + ((_a = this.head) === null || _a === void 0 ? void 0 : _a.value));
        this.index--;
        return aux;
    };
    LinkedList.prototype.remove = function (node) {
        var _a, _b, _c;
        if (!this.head) {
            return;
        }
        //Si el nodo se encuentra al principio
        if (this.head.value.toLocaleLowerCase() === node.toLocaleLowerCase()) {
            this.head = null;
            this.tail = null;
        }
        var aux = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        var pre = this.head;
        while (aux !== null) {
            if (node.toLocaleLowerCase() === (aux === null || aux === void 0 ? void 0 : aux.value.toLocaleLowerCase())) {
                if (aux.value.toLocaleLowerCase() === ((_b = this.tail) === null || _b === void 0 ? void 0 : _b.value.toLocaleLowerCase())) {
                    console.log("Entra en el if ");
                    pre.next = aux.next;
                    this.tail = pre;
                }
                pre.next = aux.next;
            }
            pre = aux;
            aux = aux === null || aux === void 0 ? void 0 : aux.next;
        }
        this.index--;
        console.log("El valor de tail es " + ((_c = this.tail) === null || _c === void 0 ? void 0 : _c.value));
    };
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
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
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
newLinkedlist.addToTheEnd("sexto Nodo");
newLinkedlist.addToTheEnd("septim0 Nodo");
newLinkedlist.addToTheEnd("octavo Nodo");
newLinkedlist.addToTheEnd("noveno Nodo");
newLinkedlist.addToTheEnd("decimo Nodo");
newLinkedlist.addToTop("cero Nodo");
newLinkedlist.remove("DeCiMo NODO");
console.log(newLinkedlist.getIndex());
console.log(newLinkedlist.getLinkedlist());
