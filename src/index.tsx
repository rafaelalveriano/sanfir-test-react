import ReactDOM from 'react-dom'
import Router from './router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './utils'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>,
  document.getElementById('root'),
)
