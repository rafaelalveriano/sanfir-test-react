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
import handleBirthdate from './handleBirthdate'

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

const averageAges = (ages: number[]) => {
  let soma = 0
  for (let i in ages) {
    soma += ages[i]
  }
  const media = soma / ages.length
  return media.toFixed(1).toString()
}

const Dash = () => {
  const classes = useStyles()
  const [persons, setPersons] = React.useState<PersonType[]>([])
  const [ages, setAges] = React.useState<number[]>([])

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
    const ages = handleBirthdate(persons)
    console.log(ages)
    setAges(ages)
  }, [persons])

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
              <PaperInfo
                icon={<CallReceived />}
                title="Menor idade"
                qtd={Math.min(...ages).toString()}
              />
              <PaperInfo
                icon={<CallMade />}
                title="Maior idade"
                qtd={Math.max(...ages).toString()}
              />
              <PaperInfo
                icon={<Assessment />}
                title="Media de idades"
                qtd={averageAges(ages)}
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
