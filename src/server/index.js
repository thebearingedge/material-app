import express from 'express'

const app = express()
const assets = express.static(`${__dirname}/public`)

app
  .use(assets)
  .listen(3000, () => process.stdout.write('Listening on 3000\n'))
