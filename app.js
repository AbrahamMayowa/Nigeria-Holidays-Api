const express = require('express')
const mongoose = require('mongoose')
const env = require('./env')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorController = require('./controllers/errors')
const holidayRoutes = require('./routes/holiday')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(holidayRoutes)

app.use(errorController.error404)

app.use(errorController.error500)





mongoose.connect(env.mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(connected => app.listen(3000))
.catch(error => console.log(error))
