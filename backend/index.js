const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router=require("./src/routes/userRoutes")
require("./src/config/db")
require('dotenv').config()
const port = process.env.PORT
console.log(process.env.PORT)
app.use(cors())
app.use(bodyParser.json())
app.use("/",router)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})