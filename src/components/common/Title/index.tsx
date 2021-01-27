import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface TitleProps {
  content: string
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginBottom: 80 }}
    >
      <Typography variant="h4" component="h2">
        {content}
      </Typography>
    </Grid>
  )
}

export default Title
