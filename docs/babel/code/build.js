const babel = require('@babel/core');
const code = `
const sayHi = () => {
  console.log('Hello, Babel')
}
sayHi()
`
const options = {}
const result = babel.transform(code, options)
console.log(result);