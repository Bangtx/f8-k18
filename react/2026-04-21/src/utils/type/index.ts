interface Style {
  [key: string]: string
}

interface Column {
  value: string
  text: string
  style?: Style
}

interface Row {
  [key: string]: string | number | null
  id: number
}

interface Student extends Row {
  id: number
  name: string
  age: number | null
  class: string
  address: string
}

export type {
  Column,
  Row,
  Student
}