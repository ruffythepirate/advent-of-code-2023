function parseNumberFromString(str) {
  const firstNumber = newStr[0];
  const lastNumber = newStr[newStr.length - 1];
  return parseInt(firstNumber + lastNumber)
}

function getFirstDigit(str) {
}

function getFirstNumberDigitIndex() {
  str.forEach((char, index) => {
    if(!isNaN(parseInt(char))) {
      return index;
    }
  });
}

function getLastNumberDigitIndex() {
  str.reverse().forEach((char, index) => {
    if(!isNaN(parseInt(char))) {
      return index;
    }
  });
}

module.exports = { parseNumberFromString, convertTextNumbersInString}