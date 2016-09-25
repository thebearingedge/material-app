import express from 'express'

const app = express()
const assets = express.static(`${__dirname}/public`)

app.use(assets)

export default app
