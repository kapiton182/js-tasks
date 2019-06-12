function strBuffer() {
  let buffer = '';

  return function buff(str) {
    if(str === undefined) {
      return buffer;
    }
    buff.clear = () => {
      buffer = '';
    }
    buffer += str;
  }
}


let r = strBuffer();
r('helo');
r('world');
console.log(r())
r.clear();
console.log(r())