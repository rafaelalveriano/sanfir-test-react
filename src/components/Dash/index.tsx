import React from 'react'
import { Layout, Load } from '../common'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { isEmpty } from 'lodash'
import PaperInfo from './PaperInfo'
import { Group, CallReceived, CallMade, Assessment } from '@material-ui/icons'
import List from './List'
import { HttpClient } from '../../services'
import { PersonType } from '../Person/PersonType'
import handleBirthdata from './handleBirthdata'

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

const agesAverage = (ages: number[]) => {
  if (isEmpty(ages)) return 0
  let soma = 0
  for (let i in ages) {
    soma += ages[i]
  }
  const media = soma / ages.length
  return media.toFixed(1)
}

const smallerAge = (ages: number[]) => (isEmpty(ages) ? 0 : Math.min(...ages))

const biggerAge = (ages: number[]) => (isEmpty(ages) ? 0 : Math.max(...ages))

const Dash = () => {
  const classes = useStyles()
  const [persons, setPersons] = React.useState<PersonType[]>([])
  const [ages, setAges] = React.useState<number[]>([])
  const [load, setLoad] = React.useState<boolean>(false)

  React.useEffect(() => {
    setLoad(true)
    let isMounted = true
    const fetchPersons = async () => {
      const { data } = await HttpClient().get('person')
      setPersons(data)
      setLoad(false)
    }
    isMounted && fetchPersons()
    return () => {
      isMounted = false
    }
  }, [])

  React.useEffect(() => {
    const ages = handleBirthdata(persons)
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
                qtd={smallerAge(ages).toString()}
              />
              <PaperInfo
                icon={<CallMade />}
                title="Maior idade"
                qtd={biggerAge(ages).toString()}
              />
              <PaperInfo
                icon={<Assessment />}
                title="Media de idades"
                qtd={agesAverage(ages).toString()}
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <List persons={persons} />
          </Grid>
        </Grid>
        <Load open={load} />
      </Container>
    </Layout>
  )
}

export default Dash
