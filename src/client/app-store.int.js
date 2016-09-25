import { describe, it } from 'global'
import { expect } from './__test__'
import appStore from './app-store'

describe('store', () => {

  it('has an initial title state', () => {
    const { title } = appStore().getState()
    expect(title).to.equal('Material App')
  })

})
