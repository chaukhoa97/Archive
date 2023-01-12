const { numberGenerate } = require('./helpers')

function main() {
  let n = numberGenerate()
  n++
  foo(n)
}

function foo(n) {
  const n1 = n + 1
  const n2 = n1 + 2
  return n2
}

main() // breakpoint go here

//1 Breakpoint: Debugger temporarily pause execution there so you can decide what to do:

//2 Continue: Run normally until hitting a breakpoint.
//2 Step Over: Run line by line, ONLY in the same file.
//2 Step Into: Run line by line, STEP INTO into any external function.
//2 Step out: When you've STEP INTO a function, STEP OUT will take you back to the line right after the function call (instead of the next breakpoint like CONTINUE)
