import {TableContainer, StudentDialog} from './components'
import type {Column, Student} from "./utils";
import {useState} from "react";
import {Button} from "@mui/material";


export default () => {

  const columns: Column[] = [
    {
      value: 'id',
      text: 'ID',
      style: {
        textAlign: 'center'
      }
    },
    {
      value: 'name',
      text: 'Teen'
    },
    {
      value: 'age',
      text: 'Tuoi',
      style: {
        color: 'red'
      }
    },
    {
      value: 'class',
      text: 'Lop'
    },
    {
      value: 'address',
      text: 'Dia CHi'
    },
    {
      value: 'action',
      text: ''
    }
  ]

  const students: Student[] = [
    { id: 1, name: "Nguyen Van A", age: 15, class: "10A1", address: "Ha Noi" },
    { id: 2, name: "Tran Thi B", age: 16, class: "10A2", address: "Hai Phong" },
    { id: 3, name: "Le Van C", age: 15, class: "10A1", address: "Da Nang" },
    { id: 4, name: "Pham Thi D", age: 17, class: "11A1", address: "Ha Noi" },
    { id: 5, name: "Hoang Van E", age: 16, class: "10A3", address: "Nam Dinh" },
    { id: 6, name: "Do Thi F", age: 15, class: "10A2", address: "Thai Binh" },
    { id: 7, name: "Bui Van G", age: 17, class: "11A2", address: "Hai Duong" },
    { id: 8, name: "Vu Thi H", age: 16, class: "10A3", address: "Ha Noi" },
    { id: 9, name: "Dang Van I", age: 15, class: "10A1", address: "Bac Ninh" },
    { id: 10, name: "Ngo Thi K", age: 17, class: "11A1", address: "Ha Nam" }
  ];

  const [selectingStudent, setSelectingStudent] = useState<Student | undefined>(undefined)

  const [isOpenStudentDialog, setIsOpenDialog] = useState(false)

  const onClickEdit = (studentId: number) => {
    const curS: Student | undefined = students.find(s => s.id === studentId)
    setSelectingStudent(curS)
    setIsOpenDialog(true)
  }

  return (
    <>
      <TableContainer
        columns={columns}
        rows={students}
        maxWidth={'80%'}
        onClickEdit={onClickEdit}
      />

      <Button onClick={() => setIsOpenDialog(true)}>Open</Button>

      <StudentDialog
        student={selectingStudent}
        isOpen={isOpenStudentDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  )
}