const express = require('express')
const mongoose = require('mongoose')
const routes = require('./Routes/TodoRoute')
const cors = require("cors")
require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MONGODB...`))
.catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))
app.use(routes)
