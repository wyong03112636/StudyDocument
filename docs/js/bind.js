Function.prototype.myBind = function(context) {

  if (typeof this !== 'function') {
    throw new Error()
  }

  const self = this

  const args = Array.prototype.splice.call(arguments, 1)

  const fNop = function() {}

  const fn = function() {
    const bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof fNop ? this : context, args.concat(bindArgs))
  }

  fNop.prototype = this.prototype
  fn.prototype = new fNop()
  return fn
}

