import { describe, it } from 'global'
import { mountUI, expect } from './__test__'
import React from 'react'
import { App } from './app-component'

describe('client/app-component', () => {

  it('accepts a title prop', () => {
    const wrapper = mountUI(<App title='Material App'/>)
    expect(wrapper).to.have.text('Material App')
  })

})
