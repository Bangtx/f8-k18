import {Box} from '@mui/material'
import Option from "./Option.tsx";
import type {QuestionI} from '../../types'

interface Props {
  question: QuestionI
  index: number
  selectingIndex: number | null
  onAnswer: (optionIndex: number) => void
}

const Question = (
  {question, index, selectingIndex, onAnswer}: Props
) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center'
        }}
      >
        <Box
          style={{
            fontSize: '24px',
            backgroundColor: 'rgb(219 234 254)',
            borderRadius: '5px',
            padding: '8px',
            width: '100px'
          }}
        >
          Câu {index}
        </Box>
        <Box style={{fontSize: '24px'}}>{question.text}</Box>
      </Box>

      {
        question.options.map((option, index) => <Option option={option} index={index} isSelected={selectingIndex === index} onSelect={onAnswer}/>)
      }
    </>
  )
}

export default Question