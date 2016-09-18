import { before, after } from 'global'
import { jsdom } from 'jsdom'
import tapEvents from 'react-tap-event-plugin'

before(() => {
  const invariant = /injectTapEventPlugin\(\)\: Can only be called once/
  const { defaultView: window } = jsdom()
  const { document, navigator } = window
  Object.assign(global, { window, document, navigator })
  try {
    tapEvents()
  }
  catch (err) {
    if (invariant.test(err.message)) return
    throw err
  }
})

after(() => {
  let window, document, navigator
  Object.assign(global, { window, document, navigator })
})
