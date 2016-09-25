import { Router } from 'express'
import { json } from 'body-parser'

const api = new Router()

api.use(json())

export default api
