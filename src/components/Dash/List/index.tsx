import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { LocationCity } from '@material-ui/icons/'
import { PersonType } from '../../Person/PersonType'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
)

interface Props {
  persons: PersonType[]
}

const NestedList: React.FC<Props> = ({ persons }) => {
  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Cidades
        </ListSubheader>
      }
      className={classes.root}
    >
      {persons.map((person) => (
        <ListItem button key={person._id}>
          <ListItemIcon>
            <LocationCity />
          </ListItemIcon>
          <ListItemText primary={`${person.city} - ${person.uf}`} />
        </ListItem>
      ))}
    </List>
  )
}

export default NestedList
