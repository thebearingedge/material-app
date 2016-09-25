import wrap from 'express-async-wrap'

// eslint-disable-next-line no-unused-vars
const errorHandler = wrap(async (err, req, res, next) => {
  res.json(err)
})

export default errorHandler
