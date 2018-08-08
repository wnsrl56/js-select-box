Queue = function(){
    this.list = [];
    this.index = 0;

    return {
        enqueue: (c) => {
            this.list.push(c);
        },
        dequeue: () => {
            let o = this.list[this.index];
            this.index++;
            return o;
        },
        isEmpty: () => {
            return this.list.length - this.index === 0;
        },
        getList: () => {
            return this.list;
        },
        setList: (list) => {
            this.list = Array.from(list);
        }
    }
}