import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'

export const App = ({ title }) =>
  <div>
    <AppBar
      title={ title }
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
  </div>

App.propTypes = {
  title: PropTypes.string.isRequired
}

const mapState = ({ title }) => ({ title })

export default connect(mapState)(App)
