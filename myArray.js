function MyArray() {
  if (arguments !== undefined) {
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
}
  
MyArray.prototype = {

get length() {
  let maxIndex = -1;

  for (let key in this) {
    if (+key > maxIndex) {
      maxIndex = key - 0;
    }
  }

  return maxIndex + 1;
},
  
push(...values) {
  for (let i = 0; i < values.length; i++) {
    this[this.length] = values[i];
  }
},

set length(len) {
  for (let i = this.length; i > len - 1; i--) {
    delete this[i];   
  }
},
  
pop() {
  const temp = this[this.length - 1];

  delete this[this.length - 1];

  return temp;
},
  
forEach(callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i, this);
  }
},

reduce(callback, currentValue) {
  for (let i = 0; i < this.length; i++) {
    currentValue = callback(currentValue, this[i]);
  }

  return currentValue;
}, 

join(separator) {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if(i === this.length - 1) {
      return result += this[i];
  }

    result += this[i] + separator;
  }
},

includes(item, position = 0) {
  for (let i = position; i < this.length; i++) {
    if (this[i] === item) {
      return true;
    }
  }

  return false;
},

indexOf(item, position = 0) {
  for (let i = position; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }

  return -1;
},

lastIndexOf(item, position = this.length) {
  position = position > this.length ? this.length : position;

  for (let i = position; i >= 0; i--) {
    if (this[i] === item) {
      return i;
    }
  }

  return -1;
},

unshift(...values) {
  let newArray = new MyArray(...values); // запихиваем старые элементы в массив

  newArray.push(...this); // запихиваем новые элементы в новый массив

  this.length = 0; // очищаем массив

  this.push(...newArray); // запихиваем новый массив в старый
},

shift() {
  let newArr = new MyArray();
  let firstElement = this[0];
  let arrWithoutFirstElement = this.slice(1);

  newArr.push(...arrWithoutFirstElement);

  this.length = 0;

  this.push(...newArr);

  return firstElement;

},

slice(start = 0, end = this.length) {
  let newArr = new MyArray();

  start = start < 0 ? this.length + start : start;
  end = end < 0 ? this.length + end : end;

  for (let i = start; i < end; i++) {
    const element = this[i];
    
    newArr.push(element);
  }

  return newArr;
},

splice(start, count, ...elements) {
   let firstPartArr = this.slice(0, start);
   let secondPartArr = new MyArray(...elements);
   let lastPartArr = this.slice(start + count);
   let deleltedPartArr = this.slice(start, start + count);

   this.length = 0;

   this.push(...firstPartArr);
   this.push(...secondPartArr);
   this.push(...lastPartArr);

   return deleltedPartArr;
},

fill(value, start, end) {
  let firstPartArr = this.slice(0, start);
  let lastPartArr = this.slice(end);
  
  for (let i = start; i < end; i++) {
    firstPartArr.push(value);
  }

  this.length = 0;

  this.push(...firstPartArr);
  this.push(...lastPartArr);
},

reverse() {
  let tempMyArray = new MyArray();

  for (let i = this.length -1; i >= 0; i--) {
    tempMyArray.push(this[i])
  }

  this.length = 0;

  this.push(...tempMyArray);

},

concat(...values) {
  let tempArray = new MyArray(...this);

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'object') {
      if (values[i] instanceof Array || values[i] instanceof MyArray) {
        for (let j = 0; j < values[i].length; j++) {
          tempArray.push(values[i][j]);
        }
      }
    } else {
      tempArray.push(values[i]);
    }
  }

  return tempArray;
},

sort(callback = (a, b) => (a > b)) {
  for (let i = 0; i < this.length; i++) {
    let min = i;

    for (let j = i+1; j < this.length; j++) {
      if (callback(this[min], this[j])) {
        min = j;
      }
    }

    this.__swap(i, min);
  }
},

__swap(a, b){
  let temp = this[a];

  this[a] = this[b];
  this[b] = temp;
},

map(callback) {
  let newArr = new MyArray();

  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this);
  }

  return newArr;
},

filter(callback) {
  let newArr = new MyArray();

  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
},

find(callback) {
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      return this[i];
    }
  }
},

findIndex(callback) {
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
},

every(callback) {
  for (let i = 0; i < this.length; i++) {
    if(!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
},

some(callback) {
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
},

[Symbol.iterator]() {
  let current = -1;
  const last = this.length - 1;
  const arr = this;

  return {
    next() {
      if (current < last) {
        current++;

        return {
          done: false,
          value: arr[current],
        };
      } else {
          return {
          done: true,
        }
      }
    }
  }
},
  
}
  
  
  
// let a = new MyArray(2,1,0);
// a.push(4)
// a.push(8)
// a.push(9)
// a.push(1,5,6,7)

// a.sort();

// for (let val of a) {
//     console.log(val);
// }


  
  