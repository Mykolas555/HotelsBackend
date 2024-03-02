const express = require('express')
const morgan = require('morgan')
const hotelsRouter = require('./routes/hotelRoutes')
const usersRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const roomRouter = require('./routes/roomRoutes')
const reservationRouter = require('./routes/reservationRoutes')
const app = express()
app.use(express.json());

app.use(morgan('dev'))

app.use('/api/v1/hotels', reservationRouter);
app.use('/api/v1/hotels', roomRouter);
app.use('/api/v1/hotels', usersRouter);
app.use('/api/v1/hotels', reviewRouter);
app.use('/api/v1/hotels', hotelsRouter);
app.use('/api/v1/hotels', hotelsRouter);



module.exports = app;