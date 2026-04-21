import {
  Table, TableHead, TableCell, TableRow, TableBody, TablePagination
} from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import type {Column, Row} from "../../utils"
import {memo} from 'react'

interface Props {
  columns: Column[]
  rows: Row[]
  maxWidth?: number | string
  onClickEdit?: (id: number) => void
  onClickDelete?: (id: number) => void
}

const TableContainer = ({columns, rows, maxWidth, onClickEdit, onClickDelete}: Props) => {
  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () => {

  }

  const onEdit = (id: number) => {
    onClickEdit && onClickEdit(id)
  }

  const onDelete = (id: number) => {
    onClickDelete && onClickDelete(id)
  }

  return (
    <>
      <Table sx={{ maxWidth: maxWidth, margin: 'auto' }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columns.map((column) => {
                return <TableCell style={column.style} key={column.value}>{column.text}</TableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => {
              return (
                <TableRow key={row.id}>
                  {
                    columns.map(column => {
                      if (column.value === 'action') {
                        return (
                          <TableCell>
                            <EditOutlinedIcon sx={{padding: '4px'}} color={'success'} onClick={() => onEdit(row.id)}/>
                            <DeleteIcon sx={{padding: '4px'}} color={'error'} onClick={() => onDelete(row.id)}/>
                          </TableCell>
                        )
                      }
                      return <TableCell style={column.style} key={column.value}>{row[column.value]}</TableCell>
                    })
                  }
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default memo(TableContainer)