import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express  from 'express'
import connectDB from './src/config'
const app = express()
connectDB


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`CONNECTION IS SUCCESSFULLY ${process.env.PORT}`)
})