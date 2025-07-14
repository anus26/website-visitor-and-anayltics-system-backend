// ✅ Load .env at the very top
import dotenv from 'dotenv'
dotenv.config() // ⚠️ This must be first

// Then import everything else
import express from 'express'
import http from 'http'
import cors from 'cors'
import connectDB from './src/config/index.js'
import visitorroutes from './src/routes/visitorroutes.js'
import useragent from 'express-useragent'
import requestIp from 'request-ip'

// Express App Setup
const app = express()
const server = http.createServer(app)

// Middleware
app.use(cors())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express())

// Database
connectDB()

// Routes
app.get('/', (req, res) => {
  res.send('✅ Backend is running')
})
app.use('/api', visitorroutes)

// Server Listen
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

