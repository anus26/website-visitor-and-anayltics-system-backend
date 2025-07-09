import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/config/index.js'
import visitorroutes from './src/routes/visitorroutes.js'
import  useragent  from 'express-useragent'
import requestIp from 'request-ip';

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*", // frontend origin ka URL lagayein
    methods: ["GET", "POST"]
  }
})

connectDB()

app.use(cors())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express())

// ✅ Socket.io Events
io.on('connection', (socket) => {
  console.log('🟢 A user connected:', socket.id)

  // Example: Send new visitor to frontend
  socket.on('new-visitor', (data) => {
    console.log('New Visitor:', data)
    // Broadcast to admin dashboard
    io.emit('visitor-update', data)
  })

  socket.on('disconnect', () => {
    console.log('🔴 User disconnected:', socket.id)
  })
})

// ✅ Basic route
app.get('/', (req, res) => {
  res.send('Socket.IO Server is Running')
})
app.use('/api',visitorroutes)
// ✅ Start Server
server.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`)
})
