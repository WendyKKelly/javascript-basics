class Dice {
  constructor (sides = 2) {
    this.sides = sides
  }
  static roll () {
    return (Math.floor(this.sides * Math.random() * 1) === 0) ? 'heads' : coin.Newroll()
  }
}

const coin = new Dice()
coin.sides = 2
coin.Newroll = function () {
  return (Math.floor(this.sides * Math.random() * 1) === 0) ? magicDice.roll() : 'WHAT'
}
const magicDice = new Dice()
magicDice.sides = 2
magicDice.roll = function () {
  return (Math.floor(this.sides * Math.random() * 1) === 0) ? 'HELLO' : 'WHAT-WHAT'
}
console.log(Dice.roll())
