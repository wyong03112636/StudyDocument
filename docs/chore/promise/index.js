// MyPromise 实现
const state = {
  Pending: 'Pending',
  Resovled: 'Resolved',
  Reject: 'Reject'
}


class MyPromise {
  constructor(callback) {
    callback(this._resolve.bind(this), this._reject.bind(this))
  } 

  _State = state.Pending

  _resolveValue 

  _resArray = []

  _resolve(val) {
    if (this._State === state.Pending) {
      this._State = state.Resovled
      this._resolveValue = val
      this._runResovleArray()
    }
  }

  _reject() {}

  _runResovleArray() {
    this._resArray.forEach((item) => {
      const result = item.handle(this._resolveValue)
      const nextPromise = item.newPromise
      if (result instanceof MyPromise) {
        result.then(val => nextPromise._resolve(val))
      } else {
        nextPromise._resolve(result)
      }
    })
  }


  then(onRes, onRej = () => {}) {
    const newPromise = new MyPromise(() => {})
    const item = {
      newPromise: newPromise,
      handle: onRes
    }
    this._resArray.push(item)

    if (this._State === state.Resovled) {
      this._runResovleArray()
    }

    return newPromise
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 1000)
}).then((val) => {
  console.log(val)
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(4)
    }, 3000)
  })
}).then((val) => {
  console.log(val)
})