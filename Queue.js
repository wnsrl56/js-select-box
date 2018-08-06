this.Queue = function(){
    this.list = [];
    return {
        enqueue: (c) => {
            this.list.push(c);
        },
        dequeue: () => {
            return this.list.shift();
        },
        isEmpty: () => {
            return this.list.length === 0;
        },
    }
}