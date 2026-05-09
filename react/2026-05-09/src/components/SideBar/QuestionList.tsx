import {Box} from "@mui/material";
import styles from './style.module.sass'

interface QuestionNumberProps {
  questionNumber: number
  isSelecting: boolean
}

interface QuestionListProps {
  totalQuestion: number
  selectingQuestion: number
  // answeredQuestions: number[]
}

const QuestionNumber = ({questionNumber, isSelecting}: QuestionNumberProps) => {
  return (
    <>
      <Box
        className={isSelecting ? styles.selectingQuestion : ''}
        sx={{
          width: 50,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: 2
        }}
      >
        {questionNumber}
      </Box>
    </>
  )
}

const QuestionList = ({totalQuestion, selectingQuestion}: QuestionListProps) => {
  return (
    <>
      <Box>Danh Sach Cau Hoi</Box>
      <Box sx={{display: 'flex'}}>
        {
          Array.from({ length: totalQuestion }).map((_, i) => {
            return <QuestionNumber key={i} questionNumber={i + 1} isSelecting={i === selectingQuestion}/>
          })
        }
      </Box>
    </>
  )
}

export default QuestionList