import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: 'bold',
  },
}))

interface InfoProps {
  icon: React.ReactChild | React.ReactChildren
  title: string
  qtd: string
}

const PaperInfo: React.FC<InfoProps> = ({ icon, title, qtd }) => {
  const classes = useStyles()

  return (
    <Paper elevation={3}>
      <Grid container direction="row" justify="center" alignItems="center">
        {icon}
        <Typography variant="subtitle1" className={classes.boldText}>
          {title}
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h2" component="h2" className={classes.boldText}>
          {qtd}
        </Typography>
      </Grid>
    </Paper>
  )
}

export default PaperInfo
