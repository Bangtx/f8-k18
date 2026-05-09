import DialogContainer from "../DialogContainer";
import {TextField} from "@mui/material";

const CustomerDialog = ({isOpen, onClose}) => {
  return (
    <>
      <DialogContainer
        isOpen={isOpen}
        onClose={onClose}
      >
        <TextField
          fullWidth
          label={'name'}
        />
        <TextField
          fullWidth
          label={'address'}
        />
      </DialogContainer>
    </>
  )
}

export default CustomerDialog
