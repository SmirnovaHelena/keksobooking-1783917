/*Функция для проверки длины строки.
const checkLength = (string, validLength) => string.length <= validLength;
checkLength('проверяемая строка', 20);

const checkLengthS = (string, validLength) => string.length === validLength;
checkLengthS('проверяемая строка', 18);

const checkLengthD = (string, validLength) => string.length <= validLength;
checkLengthD('проверяемая строка', 10);*/

//Функция для проверки, является ли строка палиндромом.
palindrome('racecar');
palindrome('А роза упала на лапу Азора');
palindrome('table');
function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0');
myPadStart('q', 4, 'we');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('qwerty', 4, '0');

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
let getRandomPositiveFloat = function(a, b, digits = 1) {
  if (a < 0 || b < 0) return NaN;

  const lower = Math.min(a,b);
  const upper = Math.max(a,b);
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
for (let i = 0; i < 10; i++){
  console.log(getRandomPositiveFloat(1,3))
}
