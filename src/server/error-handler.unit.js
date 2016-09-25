import { describe, it } from 'global'
import run from 'express-unit'
import { spy, expect } from './__test__'
import errorHandler from './error-handler'

describe('error-handler', () => {

  it('sends and Internal Server Error', async () => {
    const err = new Error()
    const setup = (req, res, next) => {
      spy(res, 'json')
      next(err)
    }
    const [ , , res ] = await run(setup, errorHandler)
    expect(res.json).to.have.been.calledWith(err)
  })

})
