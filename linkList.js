'use strict'

function LinkList(value) {
  this.value = value;
  this.next = null;
}

LinkList.prototype = {
    addElement(value, currentNode){
        currentNode = currentNode || this;
        if(currentNode.next === null) {
            currentNode.next = new LinkList(value);
            return undefined;
        }
        
        return this.addElement(value, currentNode.next);
        
    },

    show() {
        console.log(this.value);
    }
}

const ll = new LinkList(5);
ll.addElement(1);
ll.addElement(6);
ll.addElement(34);
console.log(ll);

