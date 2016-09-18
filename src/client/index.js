import React from 'react'
import { render } from 'react-dom'
import tapEvents from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { document } from 'global'

tapEvents()

const App = () =>
  <MuiThemeProvider>
    <AppBar
      title="Material App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>

const $app = document.querySelector('#app')

render(<App/>, $app)
