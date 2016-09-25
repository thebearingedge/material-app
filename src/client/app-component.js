import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'

export const App = ({ title, children }) =>
  <div>
    <AppBar
      title={ title }
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    { children }
  </div>

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

const mapState = ({ title }) => ({ title })

export default connect(mapState)(App)
