import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import express  from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`CONNECTION IS SUCCESSFULLY ${process.env.PORT}`)
})