function deepEqual(a, b) {
    if(Object.keys(a).length < Object.keys(b.length)) {
        const temp = a;
        a = b;
        b = a;
    }
    
    for (let key in a) {
        if(!(key in b)){
            return false;
        }
  
        if(typeof a[key] !== typeof b[key]) {
            return false;
        }
  
        if(typeof a[key] !== 'object') {
            if (a[key] !== b[key]) {
                return false;
            }
  
        } else {
          deepEqual(a[key], b[key]);
        }
  
    }
  
    return true;
  }

let a = { name: 'Misha', order: { price: 20 } };
let b = { order: { price: 20 }, name: 'Misha' };
let c = { name: 'Misha', order: { price: 20 }, extraField: null };
let d = { order: { price: 20 }, name: 'Petya' };
let e = { name: 'Misha', order: { price: 1000 } };
let f = { name: 'Misha', order: { price: 20, extraField: null } };

console.log(deepEqual(a, b) === true, 'A and B should be equal');

console.log(deepEqual(a, c) === false);
console.log(deepEqual(a, d) === false);
console.log(deepEqual(a, e) === false);
console.log(deepEqual(a, f) === false);