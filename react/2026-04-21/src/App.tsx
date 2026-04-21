import './App.css'
import { TextField, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import { TableContainer } from "./components";
import type {Column} from "./utils";
import {useState} from "react";
import * as React from "react";


const productNames = ['Quần áo', 'Giày dép', 'Điện thoại', 'Laptop', 'Tai nghe', 'Balo']

const customerNames = [
  'Nguyễn Văn A',
  'Trần Thị B',
  'Lê Văn C',
  'Phạm Thị D',
  'Hoàng Văn E',
  'Vũ Thị F',
  'Đặng Văn G',
  'Bùi Thị H',
  'Đỗ Văn I',
  'Phan Thị K'
]


const tmpOrders = Array.from({ length: 1000 }, (_, i) => {
  const randomDate = new Date(
    2026,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  )

  return {
    id: i + 1,
    customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
    productName: productNames[Math.floor(Math.random() * productNames.length)],
    price: Math.floor(Math.random() * 5000000) + 100000, // 100k -> 5tr
    orderDate: randomDate.toISOString().split('T')[0],
    quantity: Math.floor(Math.random() * 10) + 1
  }
})

const columns: Column[] = [
  { text: 'Mã đơn', value: 'id' },
  { text: 'Tên khách hàng', value: 'customerName' },
  { text: 'Tên sản phẩm', value: 'productName' },
  { text: 'Giá', value: 'price' },
  { text: 'Ngày đặt hàng', value: 'orderDate' },
  { text: 'Số lượng', value: 'quantity' }
]

const orders = tmpOrders

function App() {
  const [searchStr, setSearchStr] = useState<string>('')
  const [isOpen, setIsOpem] = useState(false)

  const handleClose = () => setIsOpem(!isOpen)

  return (
    <>
      <Box sx={{maxWidth: 800, margin: 'auto'}}>
        <Button onClick={() => setIsOpem(true)}>Open POPUP</Button>
        <TextField
          value={searchStr}
          label="Outlined"
          variant="outlined"
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchStr(e.target.value)}
        />
        <TableContainer columns={columns} rows={orders} maxWidth={800}/>

        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          role="alertdialog"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Disagree
            </Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </Box>

    </>
  )
}

export default App
