interface QuestionI {
  id: number
  text: string
  options: string[]
  correct: number
}

interface selectingOptionI {
  [key: number]: number | null
}

interface Injector {
  question: QuestionI
  questionIndex: number
  selectingIndex: number | null
}

export {
  QuestionI,
  selectingOptionI,
  Injector
}