const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  port = 3000,
  mongoDBURL = 'mongodb://localhost/app_tracker'

mongoose.connect(mongoDBURL, (err) => {
  console.log(err || `Connected to mongoDB at: ${mongoDBURL}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the app tracker!"
  })
})

app.listen(port, (err) => {
  console.log(err || `Server listening on port ${port}`)
})
