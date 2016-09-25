import { describe, it } from 'global'
import { mountUI, expect } from './__test__'
import React from 'react'
import { Provider } from 'react-redux'
import App from './app-component'
import appStore from './app-store'

describe('client/app-component', () => {

  it('connects to the store', () => {
    const wrapper = mountUI(
      <Provider store={ appStore() }>
        <App/>
      </Provider>
    )
    expect(wrapper).to.have.text('Material App')
  })

})
