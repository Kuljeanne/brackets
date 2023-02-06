module.exports = function check(str, bracketsConfig) {

  let config = Object.fromEntries(bracketsConfig);
  let OpenBrackets = Object.keys(config);

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    if (OpenBrackets.includes(str[i])) {
       if(stack.length !== 0 && str[i] === stack[stack.length-1] && str[i] === config[ stack[stack.length - 1]]){
        stack.pop(str[i])
      }else{
        stack.push(str[i])
      }
      // console.log(stack)
    } else {
      if (stack.length === 0) {
        // console.log('false')
        return false
      } else if (stack.length !== 0) {
        let topElement = stack[stack.length - 1];
        // console.log('on the top is '+ topElement)
        if (str[i] === config[topElement]) {
          stack.pop(str[i])
        } else {
          return false
        }

      }
    }
  }
  return (stack.length === 0)
}
