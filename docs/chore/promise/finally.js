let p1 = new Promise(function (resolve) {
  setTimeout(() => {
      resolve("ok");
  }, 2000);
});

let p2 = new Promise(function (resolve,reject) {
  setTimeout(() => {
      reject("error");
  }, 3000);
});

p1.then(value => {
  console.log(value);
  return p2;
}).then(value => {
  console.log(value)
}).catch(error=>{
  console.log(error);
});

p2.then(value => {
    console.log(value);
    // return p2;
}).finally(()=>{
    console.log("finally")
});