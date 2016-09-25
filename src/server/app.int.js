import { describe, it } from 'global'
import { expect } from 'chai'
import app from './app'

describe('server/app', () => {

  it('composes without error', () => {
    expect(app).to.be.ok
  })

})
