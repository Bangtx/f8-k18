import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import type {Student} from "../../../utils";
import {useEffect, useState} from "react";

interface Props {
  student: Student,
  isOpen: boolean
  onClose: () => void
}

const StudentDialog = ({student, isOpen, onClose}: Props) => {
  const [editingStudent, setEditingStudent] = useState<Student>({
    id: 0,
    name: '',
    age: null,
    class: '',
    address: ''
  })

  useEffect(() => {
    if (!isOpen) return
    setEditingStudent({...student})
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      role="alertdialog"
      maxWidth={'xs'}
    >
      <DialogTitle id="alert-dialog-title">Student Dialog</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Tên"
          variant="standard"
          value={editingStudent?.name}
          onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
        />
        <TextField
          margin={'normal'}
          fullWidth
          label="Tuổi"
          variant="standard"
          value={editingStudent?.age}
        />
        <TextField
          margin={'normal'}
          fullWidth
          label="Lớp"
          variant="standard"
          value={editingStudent?.class}
        />
        <TextField
          margin={'normal'}
          fullWidth
          label="Địa Chỉ"
          variant="standard"
          value={editingStudent?.address}
        />
      </DialogContent>
      <DialogActions>
        <Button color={'error'} variant={'outlined'} onClick={onClose} autoFocus>
          Cancel
        </Button>
        <Button color={'success'} variant={'outlined'} onClick={onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default StudentDialog