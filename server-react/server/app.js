const express = require('express')
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Set app
const app = express();

//1 Middleware
// Set security HTTP headers
app.use(helmet());
// Set cors
app.use(cors());

// Development logging
if( process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'));
}
// Set public folder
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 2 handler
const userRouter = require('./routes/user');
const placeRouter = require('./routes/place');
const authRouter = require('./routes/auth');

// 3 routers

app.use('/api/users',userRouter);
app.use('/api/places',placeRouter);
app.use('/api/auth', authRouter);

app.all('*',(req, res,next)=>{
    res.status('404').json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on server`,
    });
    next();
});


// 4 server
module.exports = app;