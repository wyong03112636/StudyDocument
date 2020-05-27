const babel = require('@babel/core');
const code = `
var foo = {
  // changed
  "bar": function () {},
  "1": function () {},

  // not changed
  "default": 1,
  [a]: 2,
  foo: 1
};
`
const options = {
  plugins: ["@babel/plugin-transform-property-literals"]
}
const result = babel.transform(code, options)
console.log(result.code);