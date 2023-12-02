function parseNumberFromString(str) {
  for(char of str) {
    if(isNaN(parseInt(char))) {
      str = str.replace(char, '')
    }
  }
  const firstNumber = str[0];
  const lastNumber = str[str.length - 1];
  return parseInt(firstNumber + lastNumber)
}

module.exports = { parseNumberFromString}