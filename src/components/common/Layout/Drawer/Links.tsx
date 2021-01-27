import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import { useHistory } from 'react-router-dom'

const LinksDrawer = () => {
  const history = useHistory()
  const goTo = (page: string) => history.push(page)
  return (
    <List>
      <ListItem button onClick={() => goTo('/')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Painel" />
      </ListItem>

      <ListItem button onClick={() => goTo('/person')}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Pessoas" />
      </ListItem>
    </List>
  )
}

export default LinksDrawer
