import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '../../../utils'
export default makeStyles({
  root: {
    width: '100%',
    color: '#000',
    marginBottom: '20px',
    '& .MuiInput-underline:before': {
      borderBottom: `2px solid ${Theme.palette.primary.main}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${Theme.palette.primary.main}`,
    },
    '&:hover': {
      '& .MuiInput-underline:before': {
        borderBottom: `2px solid ${Theme.palette.primary.main}`,
      },
      '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${Theme.palette.primary.main}`,
      },
    },
  },
  input: {
    color: 'black',
  },
  label: { color: 'black' },
})
