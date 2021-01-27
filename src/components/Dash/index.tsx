import React from 'react'
import { Layout } from '../common'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import PaperInfo from './PaperInfo'
import { Group, CallReceived, CallMade, Assessment } from '@material-ui/icons'
import List from './List'
import { HttpClient } from '../../services'
import { PersonType } from '../Person/PersonType'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      width: theme.spacing(20),
      height: 'auto',
      margin: theme.spacing(4),
      background: '#f1f1f1',
      padding: 10,
    },
  },
}))

const Dash = () => {
  const classes = useStyles()
  const [persons, setPersons] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    let isMounted = true
    const fetchPersons = async () => {
      const { data } = await HttpClient().get('person')
      setPersons(data)
    }
    isMounted && fetchPersons()
    return () => {
      isMounted = false
    }
  }, [])

  React.useEffect(() => {
    birthdateToAge(persons)
  }, [persons])

  const birthdateToAge = (persons: PersonType[]) => {
    const age = []
    const year = new Date().getFullYear()

    persons.map((person) => {
      const age = person.birthdata.split('-')[0]
      console.log(age)
    })
  }

  return (
    <Layout title="Painel">
      <Container>
        <Grid container direction="row">
          <Grid item md={6} sm={12}>
            <div className={classes.root}>
              <PaperInfo
                icon={<Group />}
                title="Total de pessoas"
                qtd={persons.length.toString()}
              />
              <PaperInfo icon={<CallReceived />} title="Menor idade" qtd="18" />
              <PaperInfo icon={<CallMade />} title="Maior idade" qtd="18" />
              <PaperInfo
                icon={<Assessment />}
                title="Media de idades"
                qtd="18"
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <List persons={persons} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Dash
