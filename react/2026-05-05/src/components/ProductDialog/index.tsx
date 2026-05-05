import DialogContainer from "../DialogContainer";
import {TextField} from "@mui/material";

const ProductDialog = ({isOpen, onClose}) => {
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
          label={'price'}
        />
      </DialogContainer>
    </>
  )
}

export default ProductDialog
