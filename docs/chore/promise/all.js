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


Promise.prototype.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = []
        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(value => {
                result[i] = value
                count ++
                if (count === promises.length -1) {
                    return resolve(result)
                } 
            }, (reason) => {
                return reject(reason)
            })
        }
    })
}

Promise.prototype.race = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i ++) {
            Promise.resolve(promises[i]).then(value => {
                return resolve(value)
            }, reason => {
                return reject(reason)
            })
        }
    })
}

Promise.prototype.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let count;
        let result = [];
        for (let i = 0; i < promises.length; i ++) {
            Promise.resolve(promises[i]).then(value => {
                result[i] = value
                count ++ 
                if (count === promises.length - 1) {
                    return resolve(result)
                }
            }, reason => {
                return reject(reason)
            })
        }
    })
}

Array.prototype._map = function(callback) {
    if (typeof callback !== 'function') {
        return null
    }
    const arr = [...this]
    if (!arr.length) {
        return []
    }
    return arr.reduce((p, c, i) => {
        p.push(callback(c, i))
        return p
    }, [])
}

[1, 2, 3]._map((item, index) => {
    return item + index
})
