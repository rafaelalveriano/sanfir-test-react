import { Layout } from '../common'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import PaperInfo from './PaperInfo'
import { Group, CallReceived, CallMade, Assessment } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(20),
      height: 'auto',
      margin: theme.spacing(10),
      background: '#f1f1f1',
      padding: 10,
    },
  },
}))

const Dash = () => {
  const classes = useStyles()
  return (
    <Layout title="Painel">
      <Container>
        <div className={classes.root}>
          <PaperInfo icon={<Group />} title="Total de pessoas" qtd="20" />
          <PaperInfo icon={<CallReceived />} title="Menor idade" qtd="18" />
          <PaperInfo icon={<CallMade />} title="Maior idade" qtd="18" />
          <PaperInfo icon={<Assessment />} title="Media de idades" qtd="18" />
        </div>
      </Container>
    </Layout>
  )
}

export default Dash
