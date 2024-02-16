class Stack {
  private stack: Array<any>;
  constructor() {
    this.stack = [];
  }
  public add(item: any) {
    this.stack.push(item);
  }
  public remove() {
    this.stack.pop();
  }
  public getStack() {
    return this.stack;
  }
}
const newStack = new Stack();
newStack.add("Hello Word");
newStack.add("Hello Word 2 ");
newStack.add("Hello Word 3");
newStack.add("Hello Word 4");

newStack.remove();
console.log(newStack.getStack());
