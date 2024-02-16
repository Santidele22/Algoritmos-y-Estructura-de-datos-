var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        this.queue.shift();
    };
    Queue.prototype.getQueue = function () {
        return this.queue;
    };
    return Queue;
}());
var newQueue = new Queue();
newQueue.enqueue("Hola");
newQueue.enqueue("mi");
newQueue.enqueue("amorci");
newQueue.enqueue("feliz");
newQueue.enqueue("san valentin");
newQueue.enqueue("te amo");
newQueue.enqueue("te amo");
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue.getQueue());
