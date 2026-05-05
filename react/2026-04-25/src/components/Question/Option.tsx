import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import {Box} from '@mui/material'

interface Props {
  option: string
  index: number
  isSelected: boolean,
  onSelect: (optionIndex: number) => void
}

const Option = ({option, index, isSelected, onSelect}: Props) => {
  const onClick = () => {
    onSelect(index)
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        margin: '8px 0',
        cursor: 'pointer',
      }}
    >
      {isSelected ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon/>}
      <span>{option}</span>
    </Box>
  )
}

export default Option