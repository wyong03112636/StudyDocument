const start = new Date().getTime();
new Promise(function (resolve, reject) {
    console.log(1);
    if (reject) {
        setTimeout(() => {
            console.log(new Date().getTime() - start);
            resolve("first");
        }, 1000)
    } else {
        reject("error");
    }
}).then(value => {
    console.log(2);
    console.log(value);
    //返回新的Promise
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log(new Date().getTime() - start);
            resolve("second")
        }, 2000);
    })
}).then(value => {
    console.log(3);
    console.log(new Date().getTime() - start);
    console.log(value);
    //直接执行下一个then
    setTimeout(() => {
        console.log(new Date().getTime() - start + " no waring")
    }, 1000);
    return value;
}).then(value => {
    //没有返回，所以下一个then的onFulfiled的值是undefined
    console.log(4);
    console.log(value);
    console.log(new Date().getTime() - start);
}).then(value => {
    console.log(5);
    console.log(value);
    console.log(new Date().getTime() - start);
});


//嵌套then，会等内部then完成之后，再去执行外部，可以把内部拆到外部
// new Promise(resolve => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         resolve("first");
//     }, 1000);
// }).then(value => {
//     console.log("3");
//     return new Promise(resolve => {
//         console.log("4");
//         setTimeout(() => {
//             console.log("5");
//             resolve(value);
//             return value;
//         }, 1000);
//     }).then(value2 => {
//         console.log("6");
//         return value2;
//     });
// }).then(value => {
//     console.log("7");
//     console.log(value);
// });

//拆分结果，执行与上面一样
// new Promise(resolve => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         resolve("first");
//     }, 1000);
// }).then(value => {
//     console.log("3");
//     return new Promise(resolve => {
//         console.log("4");
//         setTimeout(() => {
//             console.log("5");
//             resolve(value);
//             return value;
//         }, 1000);
//     });
// }).then(value2 => {
//     console.log("6");
//     return value2;
// }).then(value => {
//     console.log("7");
//     console.log(value);
// });
//


//promise陷阱，其实对于two函数而言，他是执行的，一声明的时候就已经执行了，不会等到one执行完成之后才执行
// let one = function () {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("1");
//             resolve("q");
//         },1000)
//     });
// };
//
// let two = function () {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("2");
//             resolve("w");
//         },1000)
//     });
// };
// one().then(two).then(value => {
//     console.log("end")
//     console.log(value)
// });

// resolve(p) 在一个异步任务中，等待另外一个异步任务的执行。那么等待的那个异步任务就会变成中介的形式，传递执行那个异步的状态。
// const p1 = new Promise(function (resolve, reject) {
//     console.log("start");
//     setTimeout(() => {
//         console.log("ii");
//         resolve("iii");
//     }, 2000)
// });
//
// const p2 = new Promise(function (resolve, reject) {
//     // ...
//     console.log("jj");
//     resolve(p1);
// });
// p2.then(value => {
//     console.log("kk");
//     console.log(value)
// });

