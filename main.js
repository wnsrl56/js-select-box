window.onload = function main() {
    let target = document.getElementById('title');
    let popup = document.getElementById('popup');
    this.list = document.getElementById('list');
    this.data = [];    
    this.dataList = new this.Queue();
    
    this.drawPopup = (e) => {
        if(popup.style.display == 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    }

    target.addEventListener('click', this.drawPopup);

    let initData = () => {

        for(let i = 0; i < 300; i++) {
            this.data.push(`item${i}`);    
        }
    };

    this.createSelectBox = (d) => {
        const el = document.createElement('li');
        el.innerHTML = d;
        el.setAttribute('class', 'item');
        el.addEventListener('click', this.drawPopup);
        return el;
    }

    initData();
};