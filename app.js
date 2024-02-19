const express = require('express')
const morgan = require('morgan')
const hotelsRouter = require('./routes/hotelRoutes')
const usersRouter = require('./routes/userRoutes')
const app = express()
app.use(express.json())

app.use(morgan('dev'))
app.use('/api/v1/hotels', hotelsRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;