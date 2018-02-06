
const view = {
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  start: document.getElementById('start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  render (target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key])
    }
    target.innerHTML = content
  },
  show (element) {
    element.style.display = 'block'
  },
  hide (element) {
    element.style.display = 'none'
  },
  resetForm () {
    this.response.answer.value = ''
    this.response.answer.focus()
  },
  setup () {
    this.show(this.question)
    this.show(this.response)
    this.show(this.result)
    this.hide(this.start)
    this.render(this.score, game.score)
    this.render(this.result, '')
    this.render(this.info, '')
    this.resetForm()
  },

  teardown () {
    this.hide(this.question)
    this.hide(this.response)
    this.show(this.start)
  }
}
const game = {
  const square (x) => x * x
  const hypoteneuse (a, b) => Math.sqrt(square(a) + square(b))
    console.log(hypoteneuse(3, 4))

  start (quiz) {
    console.log('start() invoked')
    this.score = 0
    this.random = game.hypoteneuse(3, 4)
    console.log(game.hypoteneuse(3, 4))
    view.setup()
    this.ask()
  },

  ask () {
    console.log('ask() invoked')
  //  if (game.answer !== game.response) {
    const question = 'What is the hypoteneuse?'
    view.render(view.question, question)
    // } else {
    //   this.gameOver()
  //  }
  },
  guess (event) {
    console.log('check(event) invoked')
    event.preventDefault()
    const response = view.response.answer.value
    const answer = this.random.toString()
    console.log(this.random)
    console.log(typeof answer)
    console.log(typeof response)
    // console.log(answer)
    if (response !== answer && this.score < 3) {
      view.render(view.result, `Wrong! Try again`, {'class': 'wrong'})
      this.score++
      view.render(view.score, this.score)
    } else {
      if (this.score >= 3) {
        this.gameOver()
      } else {
        view.render(view.result, `Right!`, {'class': 'correct'})
        this.gameOver()
      }
    }
    view.resetForm()
    this.ask()
  },
  gameOver () {
    console.log('gameOver() invoked')
    // view.show(view.start);
    view.render(view.info, `Game Over, you used ${this.score} turn${this.score !== 1 ? 's' : ''}`)
    view.teardown()
    // clearInterval(this.timer)
  }
}
view.start.addEventListener('click', () => game.start(), false)
view.response.addEventListener('submit', (event) => game.guess(event), false)
view.hide(view.response)
