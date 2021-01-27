import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { GroupAdd, Delete, Edit } from '@material-ui/icons/'
import Grid from '@material-ui/core/Grid'
import { Alert } from '../../common'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  onEdit: () => void
  onDelete: () => void
  totalRowsSelected: number
}

const Buttons: React.FC<Props> = ({
  setOpenModal,
  onEdit,
  onDelete,
  totalRowsSelected,
}) => {
  const handleOnDelete = async () => {
    if (await Alert.AlertDelete()) {
      onDelete()
    }
  }
  return (
    <Grid container>
      <Button
        variant="contained"
        color="primary"
        startIcon={<GroupAdd />}
        onClick={() => setOpenModal(true)}
      >
        Novo cadastro
      </Button>

      {totalRowsSelected >= 1 && (
        <IconButton
          onClick={handleOnDelete}
          color="primary"
          aria-label="delete"
          style={{ marginLeft: 10 }}
        >
          <Delete />
        </IconButton>
      )}
      {totalRowsSelected === 1 && (
        <IconButton
          onClick={onEdit}
          color="primary"
          aria-label="delete"
          style={{ marginLeft: 10 }}
        >
          <Edit />
        </IconButton>
      )}
    </Grid>
  )
}

export default Buttons
