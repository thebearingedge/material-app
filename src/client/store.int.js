import { describe, it } from 'global'
import { expect } from './__test__'
import store from './store'

describe('store', () => {

  it('has an initial title state', () => {
    const { title } = store.getState()
    expect(title).to.equal('Material App')
  })

})
