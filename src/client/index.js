import { document } from 'global'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import tapEvents from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import appStore from './app-store'
import routes from './routes'

const store = appStore()
const history = syncHistoryWithStore(browserHistory, store)

tapEvents()

render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ history } routes={ routes }/>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#app')
)
