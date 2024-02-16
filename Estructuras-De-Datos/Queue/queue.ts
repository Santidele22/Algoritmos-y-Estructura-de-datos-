class Queue{
    private queue:Array<any>
    constructor(){
        this.queue = []
    }
    public enqueue(item){
        this.queue.push(item)
    }
    public dequeue(){
        this.queue.shift()
    }
    public getQueue (){
        return this.queue
    }
}
const newQueue = new Queue()
newQueue.enqueue("Hola")
newQueue.enqueue("mi")
newQueue.enqueue("amorci")
newQueue.enqueue("feliz")
newQueue.enqueue("san valentin")
newQueue.enqueue("te amo")
newQueue.enqueue("te amo")

newQueue.dequeue()
newQueue.dequeue()
console.log(newQueue.getQueue())