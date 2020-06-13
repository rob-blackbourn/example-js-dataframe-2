class ArrayMethods {
  constructor () {
    if (!ArrayMethods.instance) {
      this._methods = new Map()
      ArrayMethods.instance = this
    }

    return ArrayMethods.instance
  }

  add (name, method) {
    this._methods.set(name, method)
  }

  has (name) {
    return this._methods.has(name)
  }

  get (name) {
    return this._methods.get(name)
  }
}

const instance = new ArrayMethods()
Object.freeze(instance)

instance.add(Symbol.for('+'), (lhs, rhs) => lhs.array.map((value, index) => value + rhs.array[index]))
instance.add(Symbol.for('-'), (lhs, rhs) => lhs.array.map((value, index) => value - rhs.array[index]))
instance.add(Symbol.for('*'), (lhs, rhs) => lhs.array.map((value, index) => value * rhs.array[index]))
instance.add(Symbol.for('/'), (lhs, rhs) => lhs.array.map((value, index) => value / rhs.array[index]))
instance.add(Symbol.for('minus'), (lhs) => lhs.array.map((value, index) => -value))

export default instance
