import { document } from 'global'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import tapEvents from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import appStore from './app-store'
import App from './app-component'

tapEvents()

render(
  <Provider store={ appStore() }>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#app')
)
