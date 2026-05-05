import {Button} from "@mui/material";
import QuestionList from './QuestionList.tsx'

interface Props {
  onNext: () => void
  onPrev: () => void
  totalQuestion: number
  selectingQuestion: number
}

const SideBar = ({selectingQuestion, onNext, onPrev, totalQuestion}: Props) => {
  return (
    <>
      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onNext}>Next</Button>
      <QuestionList totalQuestion={totalQuestion} selectingQuestion={selectingQuestion}/>
    </>
  )
}

export default SideBar