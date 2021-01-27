import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

interface ModalProps {
  children: React.ReactChild | React.ReactChildren
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  width?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
    },
  }),
)

const TransitionsModal: React.FC<ModalProps> = ({
  children,
  setOpen,
  open,
  width,
}) => {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ width }}>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
export default TransitionsModal
