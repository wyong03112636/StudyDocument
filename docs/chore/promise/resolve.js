// Promise.resolve(new Promise(function (resolve) {
//   setTimeout(() => {
//       resolve(1);
//   }, 1000);
// })).then(value => {
//   console.log(value);
// });

new Promise(function (resolve) {
  setTimeout(() => {
      console.log(3)
  }, 0);
}).then(value => {
  console.log(value);
})

const fun = {
  then: function (resolve, reject) {
    resolve(1)
    // reject('no')
  }
}

Promise.resolve(fun)
  .then(value => {
    console.log(value);
  }).catch(error=>{
    console.log(error);
})

Promise.resolve(2).then(value => console.log(value));
