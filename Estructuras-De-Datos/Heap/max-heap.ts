class MaxHeap {
    private heap: Array<number>;
    constructor() {
      this.heap = [];
    }
    heapSort(arr: Array<number>) {
      this.buildMinHeap(arr);
      let size = arr.length;
      for (let i = size -1 ; i > 0; i--) {
        this.removeTop(arr);
        size--
      }
    }
    buildMinHeap(arr: Array<number>) {
      this.heap = [...arr];
      const size = this.heap.length;
      const halfArray = Math.floor(size / 2);
      for (let i = halfArray - 1; i >= 0; i--) {
        this.minHeapify(this.heap, i, size);
      }
    }
    getLeft(root: number, arr: Array<number>) {
      return root * 2 + 1;
    }
    getRigth(root: number, arr: Array<number>) {
      return root * 2 + 2;
    }
    private minHeapify(arr: Array<number>, root: number, size: number) {
      let min = root;
      const left = this.getLeft(root, arr);
      const rigth = this.getRigth(root, arr);
      //left
      if (left < size && arr[left] > arr[min]) {
        min = left;
      }
      //rigth
      if (rigth < size && arr[rigth] > arr[min]) {
        min = rigth;
      }
      // Si se encontró un hijo con un valor menor, intercambiar los valores y llamar a minHeapify recursivamente en el hijo
      if (min !== root) {
        this.swap(arr, root, min);
        this.minHeapify(arr, min, size);
      }
    }
    private swap(arr: Array<number>, firstElement: number, lastElement: number) {
      let temp = arr[firstElement];
      arr[firstElement] = arr[lastElement];
      arr[lastElement] = temp;
    }
  
    private removeTop(arr: Array<number>) {
      const lastElement = arr.length - 1;
      const firstElement = 0;
      this.swap(arr, firstElement, lastElement);
      this.minHeapify(arr, 0, arr.length - 1);
  
    }
  }
  
  const newMaxHeap = new MinHeap();
  const arr2 = [48, 10, 25, 100, 123, 44, 155, 199, 200, 300];
  newMaxHeap.heapSort(arr)
  console.log(newHeap)
  