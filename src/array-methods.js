export const arrayMethods = {
  [Symbol.for('+')]: (lhs, rhs) => lhs.array.map((value, index) => value + rhs.array[index]),
  [Symbol.for('-')]: (lhs, rhs) => lhs.array.map((value, index) => value - rhs.array[index]),
  [Symbol.for('*')]: (lhs, rhs) => lhs.array.map((value, index) => value * rhs.array[index]),
  [Symbol.for('/')]: (lhs, rhs) => lhs.array.map((value, index) => value / rhs.array[index]),
  [Symbol.for('minus')]: (lhs) => lhs.array.map((value, index) => -value)
}
