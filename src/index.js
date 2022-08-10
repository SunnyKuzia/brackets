module.exports = function check(str, bracketsConfig) {
  let brackets = {};

  for (let array of bracketsConfig) {
    brackets[array[1]] = array[0];
  }

  let stack = [];
  let index = 0;
  for (let char of str) {
    if (char in brackets) {
      if (char == brackets[char]) {
        if (stack[stack.length - 1] == char) {
          stack.pop();
        } else {
          stack.push(char);
        }
        continue;
      }
      let charToCheck = stack.pop();
      if (charToCheck != brackets[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length == 0;

}

