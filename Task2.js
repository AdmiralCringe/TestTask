function checkSyntax(string) {
    const openBrackets = ['(', '[', '{', '<'];
    const closeBrackets = [')', ']', '}', '>'];
    const stack = [];
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
  
      if (openBrackets.includes(currentChar)) {
        stack.push(currentChar);
      }
  
      if (closeBrackets.includes(currentChar)) {
        const matchingOpeningBracket = openBrackets[closeBrackets.indexOf(currentChar)];
  
        if (stack.length === 0 || stack[stack.length - 1] !== matchingOpeningBracket) {
          return 1;
        }
  
        stack.pop();
      }
    }
  
    return stack.length === 0 ? 0 : 1;
  }
  console.log(checkSyntax('---(++++)----'))
  console.log(checkSyntax(' '))
  console.log(checkSyntax('before ( middle []) after '))
  console.log(checkSyntax(') ('))
  console.log(checkSyntax('} {'))
  console.log(checkSyntax('<(   >)'))
  console.log(checkSyntax('(  [  <>  ()  ]  <>  )'))
  console.log(checkSyntax('   (      [)'))
  