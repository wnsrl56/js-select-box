window.onload = function main() {
    let target = document.getElementById('title');
    let popup = document.getElementById('popup');
    this.listEl = document.getElementById('list');
    this.countEl = document.getElementById('counter');
    this.elQueue = new this.Queue();
    this.data = [];
    this.counter = 0;

    this.drawPopup = (e) => {
        if(popup.style.display == 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    }    
    target.addEventListener('click', this.drawPopup);

    let initData = () => {
        console.time();
        for(let i = 0; i < 100000; i++) {
            this.data.push(`item${i}`);
        }
        for(let i = 0; i < this.data.length; i++) {
            this.elQueue.enqueue({
                execute: (fragment) => {   
                    fragment.appendChild(this.createSelectBox(this.data[i]));                            
                },        
            });
        }
    };

    let appendChildEl = (deadLine) => {                                 
        let fragment = document.createDocumentFragment();    
        while(deadLine.timeRemaining() > 0 && !this.elQueue.isEmpty()) {
            const item = this.elQueue.dequeue();
                if(item.execute) {
                    item.execute(fragment);   
                }           
        }

        requestAnimationFrame(() => {
            this.list.appendChild(fragment);
        });         

        if(!this.elQueue.isEmpty()) {
            requestIdleCallback(appendChildEl);        
        }else {
            console.timeEnd();            
        }
    };

    this.createSelectBox = (d) => {
        const el = document.createElement('li');
        el.innerHTML = d;
        el.setAttribute('class', 'item');
        el.addEventListener('click', this.drawPopup);
        return el;
    }
    
    requestIdleCallback(appendChildEl);

    initData();
};