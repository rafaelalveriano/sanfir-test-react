import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      margin: theme.spacing(1),
      minWidth: 120,
      color: '#000',
    },
    selectEmpty: {
      color: '#000',
      marginTop: theme.spacing(2),
    },

    root: {
      width: '100%',
      color: '#000',
      marginBottom: '20px',
      '& .MuiSelect-root': { color: 'black' },
      '& .MuiInput-underline:before': {
        color: 'black',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
      '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
      '&:hover': {
        '& .MuiInput-underline:before': {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
        '& .MuiInput-underline:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
      },
    },
    input: {
      color: 'black',
    },
    label: { color: 'black' },
  }),
)
