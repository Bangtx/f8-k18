import {Box} from '@mui/material'
import Option from "./Option.tsx";
import type {Injector, QuestionI} from '../../types'
import {useContext} from "react";
import {Context} from "../../store";

interface Props {
  onAnswer: (optionIndex: number) => void
}

const Question = (
  {onAnswer}: Props
) => {
  // @ts-ignore
  const injector: Injector = useContext(Context)

  const { question, selectingIndex, questionIndex } = injector
  const index = questionIndex + 1

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