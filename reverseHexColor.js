function invertColor(color) {
    const num = color.slice(1,);
    const converted = parseInt(num, 16);
    const invertedNumIn10 = 16777215 - converted;
    let invertedNumIn16 = invertedNumIn10.toString(16);

    while(invertedNumIn16.length !== 6) {
      invertedNumIn16 = '0' + invertedNumIn16;
    }

    return `#${invertedNumIn16}`;
  }
  
  
  
  // tests
  
  const color = '#FFFFFF';
  
  const inverted = invertColor(color);

  console.log(inverted)
  
  console.log(
    invertColor('#000000').toUpperCase() === '#FFFFFF',
    invertColor('#FFFFFF').toUpperCase() === '#000000',
    invertColor('#fedcba').toUpperCase() === '#012345',
    invertColor(inverted).toUpperCase() === color
  )