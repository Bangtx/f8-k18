import {Box} from '@mui/material'
import styles from './styles.module.sass'
import {useState} from "react";

const HeaderBar = () => {
  const [remainingTime, setRemainingTime] = useState(900)

  setTimeout(() => {
    setRemainingTime(remainingTime - 1)
  }, 1000)

  return (
    <Box className={styles.container}>
      <Box className={`${styles.header} container`}>
        <Box>
          <Box sx={{fontSize: '24px'}}>Ôn Thi GPLX</Box>
          <Box sx={{fontSize: '20px'}}>Đề thi ngẫu nhiên số 1</Box>
        </Box>
        <Box className={styles.left}>
          <Box>{Math.floor(remainingTime / 60)}:{remainingTime % 60}</Box>
          <Box className={styles.submit}>Nop Bai</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderBar