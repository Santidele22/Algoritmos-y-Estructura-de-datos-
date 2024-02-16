var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.add = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.remove = function () {
        this.stack.pop();
    };
    Stack.prototype.getStack = function () {
        return this.stack;
    };
    return Stack;
}());
var newStack = new Stack();
newStack.add("Hello Word");
newStack.add("Hello Word 2 ");
newStack.add("Hello Word 3");
newStack.add("Hello Word 4");
newStack.remove();
console.log(newStack.getStack());
