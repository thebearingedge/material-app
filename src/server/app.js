import express from 'express'
import api from './api'

const app = express()
const assets = express.static(`${__dirname}/public`)

app
  .use(assets)
  .use('/api', api)

export default app
