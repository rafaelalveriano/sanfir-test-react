import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {
  open: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

const Load: React.FC<Props> = ({ open }) => {
  const classes = useStyles()

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Load
