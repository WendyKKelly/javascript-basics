// const dice = {
//   sides: 6,
//   roll () {
//     return Math.floor(this.sides * Math.random() + 1)
//   }
// }

// const Dice = function () {
//   this.sides = 3
//   this.roll = function () {
//     return (Math.floor(this.sides * Math.random() * 2) === 0) ? 'heads' : coin()
//   }
// }
class Dice {
  constructor (sides = 2) {
    this.sides = sides
  }
  static roll () {
    return (Math.floor(this.sides * Math.random() * 1) === 0) ? 'heads' : coin.Newroll()
  }
  static description () {
    return 'A way of choosing random numbers'
  }
}
// const Dice = function (sides = 6) {
//   this.sides = sides
//   this.roll = function () {
//     return Math.floor(this.sides * Math.random() + 1)
//   }
// }
// const redDice = new Dice()

const coin = new Dice()
coin.sides = 2
coin.Newroll = function () {
  return (Math.floor(this.sides * Math.random() * 1) === 0) ? magicDice.roll() : 'WHAT'
}
console.log((coin.Newroll === 'WHAT') ? 'NO!' : 'YES')

const magicDice = new Dice()
magicDice.sides = 2
magicDice.roll = function () {
  return (Math.floor(this.sides * Math.random() * 1) === 0) ? 'HELLO' : 'WHAT-WHAT'
}
console.log((magicDice !== 'WHAT-WHAT') ? Dice.roll() : 'STOP')
console.log(Dice.roll())
// coin.roll()
// class Dice {
// constructor(sides=6) {
// this.sides = sides;
// }
// roll() {
// return Math.floor(this.sides * Math.random() + 1)
// }
// }
// const blueDice = new Dice(20);
// blueDice.constructor
// class Dice {
// constructor(sides=6) {
// this.sides = sides;
// }
// roll() {
// return Math.floor(this.sides * Math.random() + 1)
// }
// static description() {
// return 'A way of choosing random numbers'
// }
// }
// Dice.description()
// redDice.description
// //aha!! instances can't call static methods

// class Turtle {
//   constructor (name, color) {
//     this.name = name
//     let _color = color
//     this.setColor = color => {
//     return _color = color
//     }
//     this.getColor = () => _color
//   }
// }
// // private property example
// // _color created inside scope of constructor function and inside class declaration
// // getColor() and setColor() are getter and setter methods and they form a closure that restricts access to the property instead
// // example:
// this.setColor = (color) => {
//   if (typeof color === 'string') {
//     return _color = color
//   } else {
//     throw new Error('Color must be a string')
//   }
// }
// // Object.getPrototypeOf(Object.getPrototypeOf(raph))
//
// // normal turtle
// class Turtle {
// constructor(name) {
// this.name = name;
// }
// sayHi() {
// return `Hi dude, my name is ${this.name}`;
// }
// swim() {
// return `${this.name} paddles in the water`;
// }
// }
//
// // extend to child class of ninja turtle
// class NinjaTurtle extends Turtle {
//   constructor(name) {
//     super(name);
//     this.weapon = 'hands';
//   }
//   attack() { return `Feel the power of my ${this.weapon}!` }
// }
// turtles.prototype.first = function () {
//    return this[0]
//  }
//  const turtles = ['Leonardo', 'Donatello', 'Michaelangelo', 'Raphael']
//  turtles.first()
//  Array.prototype.delete = function(i) {
// return self.splice(i,1);
// }
// class myArray extends Array {
// constructor(...args){
// super(...args);
// }
// delete(i) {
// return this.splice(i,1);
// }
// }
// const list = new myArray(1,2,3);
// const me = { name: 'DAZ' }
// me.age = 21
// me.retirementAge = 65
// Object.defineProperty(me, 'yearsToRetirement', {
//   get () {
//     if (this.age > this.retirementAge) { return 0 } else { return this.retirementAge - this.age }
//   },
//   set (value) {
//     this.age = this.retirementAge - value
//     return value
//   }
// })
// console.log(me.yearsToRetirement)
// class Dice {
// constructor(sides=6){
// Object.defineProperty(this, 'sides', {
// get() {
// return `This dice has ${sides} sides`;
// },
// set(value) {
// if(value > 0) {
// sides = value;
// return sides;
// } else {
// throw new Error('The number of sides must be
// positive');
// }
// }
// });
// this.roll = function() {
// return Math.floor(sides * Math.random() + 1)
// }
// }
// }
//   const Human = {
//     arms: 2,
//     legs: 2,
//     walk () { console.log('Walking') }
//   }
//   const lois = Object.create(Human)
//   console.log(lois.walk())
//   lois.walk()
//   lois.name = 'Lois Lane'
//   lois.job = 'Reporter'
//   const Superhuman = Object.create(Human)
//   Superhuman.change = function () {
//     return `${this.realName} goes into a phone booth and comes out as ${this.name}`
//   }
//   Superhuman.name = 'Name needed'
//   Superhuman.Realname = 'Name Needed'
//   const Superman = Object.create(Superhuman)
//   Superman.name = 'Clark Kent'
//   Superman.realName = 'Superman'
//   Superhuman.init = function(name,realName){
// this.name = name
// this.realName = realName
// this.init = undefined // this line removes the init function, so it can only be called once
// return this
// const batman = Object.create(Superhuman)
// batman.init('Batman','Bruce Wayne')
// batman.change()
// const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry')
//
// function mixin (target, ...objects) {
//   for (const object of objects) {
//     if (typeof object === 'object') {
//       for (const key of Object.keys(object)) {
//         if (typeof object[key] === 'object') {
//           target[key] = Array.isArray(object[key]) ? [] : {}
//           mixin(target[key], object[key])
//         } else {
//           Object.assign(target, object)
//         }
//       }
//     }
//   }
//   return target
// }
// const flight = {
// fly() {
// console.log(`Up, up and away! ${this.name} soars through the air!`);
// return this;
// }
// }
// const superSpeed = {
// move() {
// console.log(`${this.name} can move faster than a speeding bullet!`);
// return this;
// }
// }
// const xRayVision = {
// xray() {
// console.log(`${this.name} can see right through you!`);
// return this;
// }
// }
// function createSuperhuman(...mixins) {
// const object = copy(Superhuman);
// return mixin(object,...mixins);
// }
// mixin(superman,flight,superSpeed,xRayVision);
// mixin(wonderwoman,flight,superSpeed);
// const flash = createSuperhuman({ name: 'Flash', realName: 'Barry Allen' }, superSpeed);
// superman.findFriends = function(){
// const that = this;
// this.friends.forEach(function(friend) {
// console.log(`${friend.name} is friends with ${that.name}`);
// }
// );
// }
// superman.findFriends();
// Batman is friends with Superman
// Wonder Woman is friends with Superman
// 0self or _this also used
// each mixin above has a return value of this
// const redDice = new Dice(20)
// console.log(redDice.sides)
// console.log(redDice.roll())

// function coin (sides = 2) {
//   this.sides = sides
//   this.roll = function () {
//     return Math.floor(this.sides * Math.random() + 1)
//   }
//   if (this.roll === 1) {
//     return 'heads'
//   } else {
//     return 'tails'
//   }
// }
// console.log(coin.roll()
