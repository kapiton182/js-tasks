function rle(source) {
  let compressedString = '';

  for(let i = 0; i < source.length; i++) {
    let countSymbol = 1;

    compressedString += source[i];

    for(let j = i + 1; j < source.length; j++, i++) {

      if(source[i] === source[j]) {
        countSymbol++;
        continue;
      }

      break;
    }

    if(countSymbol > 1) {
      compressedString += countSymbol;
    }   
  }

  return compressedString;
}

let source = 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD';
let convertedString = rle(source);
let expectedString = 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4';

console.assert(
  convertedString === expectedString,
  `${convertedString} is not equal to expected ${expectedString}`
);

if(convertedString == expectedString) {
  console.log('they equals')
}