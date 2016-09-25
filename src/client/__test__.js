import { before, after } from 'global'
import { jsdom } from 'jsdom'
import { mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import tapEvents from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

chai.use(chaiEnzyme())

before(() => {
  const invariant = /injectTapEventPlugin\(\)\: Can only be called once/
  const { defaultView: window } = jsdom()
  const { document, navigator } = window
  Object.assign(global, { window, document, navigator })
  try {
    tapEvents()
  }
  catch (err) {
    if (!invariant.test(err.message)) throw err
  }
})

after(() => {
  let window, document, navigator
  Object.assign(global, { window, document, navigator })
})

const mountUI = Component =>
  mount(
    <MuiThemeProvider>
      { Component }
    </MuiThemeProvider>
  )

export {
  expect,
  mountUI
}
