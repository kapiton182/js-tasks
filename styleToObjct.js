'use strict';

const stylesString = `
    background-color: #fff;

  -webkit-border-radius: 5px   ;
  border-radius  : 5px;
  border:    1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;

/**
 * Функция принимает строку со стилями
 * и возвращает объект, у которого названия CSS свойств это ключи
 * а значения - строки
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyles = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split(':');
    let key = str[0];
    let value = str[1];

    if(key === undefined || value === undefined) {
        continue;
    }

    key = key.trim();
    value = value.trim();
    
    objStyles[key] = value;
  }

  return objStyles;
}

console.dir(convertToObject(stylesString))
// ----- Tests ------

const EXPECTED_OBJECT = {
  "background-color": "#fff",
  "-webkit-border-radius": "5px",
  "border-radius": "5px",
  "border": "1px solid #e8e8e8",
  "-webkit-box-sizing": "border-box",
  "box-sizing": "border-box",
  "clear": "both",
  "cursor": "pointer",
  "float": "left",
  "font-family": "inherit",
  "font-size": "14px",
  "font-weight": "400",
  "height": "42px",
  "line-height": "40px",
  "outline": "0",
  "padding-left": "18px",
  "padding-right": "30px",
  "position": "relative",
  "text-align": "left !important",
  "-webkit-transition": "all .2s ease-in-out",
  "transition": "all .2s ease-in-out",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "user-select": "none",
  "white-space": "nowrap",
  "width": "auto",
};


//Tests

test(
  JSON.stringify(convertToObject(stylesString)),
  JSON.stringify(EXPECTED_OBJECT)
);


function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);
  } else {
    console.log(`Test ${testName} passed!`);
  }
}
