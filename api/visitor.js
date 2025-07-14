// api/visitor.js
import express from 'express'
import visitorroutes from '../src/routes/visitorroutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import useragent from 'express-useragent'
import requestIp from 'request-ip'
import connectDB from '../src/config/index.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express())

connectDB()

app.use('/api', visitorroutes)

// Vercel-compatible handler export
export default app

