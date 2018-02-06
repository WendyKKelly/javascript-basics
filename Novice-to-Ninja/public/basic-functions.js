
const square = (x) => x * x
// const pop = []
// for (let y = 1; y <= 5; y++) {
//   pop.push([ y = Math.floor(Math.random() * (5)) ])
// }
// const mean = (pop) => sum(pop) / pop.length
// console.log(mean(pop))
//  const variance = (array) => sum(array, square) / array.length - square(mean(array))
// const hypoteneuse = (a, b) => Math.sqrt(square(a) + square(b))
//  const stdDev = (array) => Math.sqrt(square(sum(array) - mean(array)) / sum(array))
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);
  // const halfDev = pop.reduce((total, amount) => {
  //   total.push(square(amount - mean(pop)))
  //   return total
  // }, [])
  // const stdDev = Math.sqrt(sum(halfDev) / pop.length)
  // (array - mean(array))
   // const areaC = (d) => (3.14 + square(d))
//   const subSum = (array) => (sum(array)) - (sum(array))
// stdDev of a population is Math.sqrt(sum(square(x - mean)/N
// function sum (array, callback) {
//   if (callback) {
//     array = array.map(callback)
//   }
//   return array.reduce((a, b) => a + b)
// }
//  const array = [4, 8, 9, 7, 6, 9]
//   console.log(subSum([4, 8, 9, 7, 6, 9]))
  // console.log(typeof pop)
//   console.log(typeof square(3 - mean(3)) / 4)
  // console.log()

function curry (func, ...oldArgs) {
  return function (...newArgs) {
    const allArgs = [...oldArgs, ...newArgs]
    return func(...allArgs)
  }
}
const divider = (f, g) => f / g
console.log(divider(10, 5))
const reciprocal = curry(divider, 1)
console.log(reciprocal(2))
const infinity = curry(reciprocal, 0)
console.log(infinity(2))
const imaginary = curry(reciprocal, Math.sqrt(64))
console.log(imaginary(2))
const stupid = curry(imaginary, square(2))
console.log(stupid(4))
const pointless = curry(reciprocal, divider(2))
console.log(pointless)
