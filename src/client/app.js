import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export const App = ({ children }) =>
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Material App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      { children }
    </div>
  </MuiThemeProvider>
