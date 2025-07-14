// api/visitor.js
import express from 'express'
import cors from 'cors'
import useragent from 'express-useragent'
import requestIp from 'request-ip'
import connectDB from '../src/config/index.js'
import visitorroutes from '../src/routes/visitorroutes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express())

connectDB()
app.use('/api', visitorroutes)

export default app
