const p1 = new Promise(function (resolve) {
    console.log("p1");
    setTimeout(() => {
        console.log("p1->");
        resolve(1);
    }, 4000)
});
const p2 = new Promise(function (resolve, reject) {
    console.log("p2");
    setTimeout(() => {
        console.log("p2->");
        resolve(2);
    }, 2000)
});
const p3 = new Promise(function (resolve) {
    console.log("p3");
    setTimeout(() => {
        console.log("p3->");
        resolve(3);
    }, 3000)
});
const fun = function () {
    return "your";
}
Promise.all([p1,p2,p3,"you",fun()]).then(value => {
    console.log(value);
}).catch(error=>{
    console.log(error)
});