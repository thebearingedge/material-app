import { after } from 'global'
import chai, { expect } from 'chai'
import { spy } from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

after(() => {
  process.stdout.write('====== SERVER ======\n')
})

export {
  expect,
  spy
}
