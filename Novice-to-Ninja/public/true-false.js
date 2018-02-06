const quiz = {
  'Trump claimed credit for 2.4 million new jobs “since the election,”':
  // when more than a half a million of those jobs were created under then-President Obama.
'Trump claimed that wages are “finally” going up,'
// when they’ve been on a generally upward trend since the 1990s.
'Trump boasted that the African American unemployment rate was the “lowest rate ever recorded”': false,
'Trump claimed that Hispanic unemployment was at the “lowest levels in history.”': false,
// True, but both rates have been in steady decline for about seven years. And the recent Hispanic rate matches the record low in October 2006.
'Trump falsely said car companies have not built or expanded plants in the U.S. “for decades.”'
//  Two new assembly plants were announced and others expanded in the last nine years.
'The president said he had appointed “more circuit court judges than any new administration” in history.'
// True, but appointments by Presidents Nixon and Kennedy had a greater impact since there were far fewer appellate court seats back then.
'Trump said the U.S. does “more than any other country … to help the needy, the struggling, and the underprivileged all over the world.”'
// In raw dollars of development aid, it’s true. But as a proportion of gross national income, the U.S. ranked 22nd in 2016.
'The president said that the U.S. is “an exporter of energy to the world.”'
// The Energy Information Administration estimates the U.S. won’t be a net exporter of energy until 2026.
'Trump said that “we enacted the biggest tax cuts and reforms in American history.”'
// There have been larger cuts as a percentage of gross domestic product and in inflation-adjusted dollars
'The president said the new tax law gives “tremendous relief for the middle class.”'
// The middle quintile in terms of income gets an average tax cut of $930 in 2018, but the top quintile gets a little more than 65 percent of the tax cut benefits.
'Trump said cutting the corporate tax rate will “increase average family income by more than $4,000.”'
//  This is a rosy, long-term estimate from White House economic advisers based on questionable assumptions.
'Trump said the Diversity Immigrant Visa Program “hands out green cards without any regard for skill … or the safety of the American people.”'
// There are both education or work experience requirements, and a background check for all who are selected.
'Trump said that “America has also finally turned the page on decades of unfair trade deals.”'
// But the trade deficit that he promised to reduce has grown larger during his presidency.
'Trump said the U.S. is “restoring our … standing abroad.”'
// But a recent Gallup Poll found “approval of U.S. leadership across 134 countries and areas stands at a new low.”
}
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
  num (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  },
  start (quiz) {
    console.log('start() invoked')
    this.score = 0
    this.random = game.num(0, 20)
    // console.log(game.num(0, 4))
    view.setup()
    this.ask()
  },

  ask () {
    console.log('ask() invoked')
  //  if (game.answer !== game.response) {
    const question = 'What is your guess?'
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
