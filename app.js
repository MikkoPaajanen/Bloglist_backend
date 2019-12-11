const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const middelware = require('./utils/middelware')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogRouter)
app.use(middelware.unknownEndpoint)
app.use(middelware.errorHandler)

module.exports = app