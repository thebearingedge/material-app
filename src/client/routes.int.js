import { describe, it } from 'global'
import { expect } from './__test__'
import routes from './routes'

describe('routes', () => {

  it('composes without error', () => {
    expect(routes).to.be.ok
  })

})
