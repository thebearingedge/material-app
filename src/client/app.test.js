import { describe, it } from 'global'
import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount } from 'enzyme'
import { App } from './app'

chai.use(chaiEnzyme())

describe('<App/>', () => {

  it('Says "Material App"', () => {
    expect(mount(<App/>)).to.have.text('Material App')
  })

})
