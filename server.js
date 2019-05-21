const express = require('express');
const app = express();
const mongoose = require('mongoose');
const moment = require('moment');
const morgan = require('morgan');
const session = require('express-session');
const db = mongoose.connection;
const methodOverride = require('method-override');

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/football_app';
const PORT = process.env.PORT || 3000;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// open connection to mongodb
db.on('open' , ()=>{});
// Middleware


app.use(express.urlencoded({ extended: true }))



                                              // extended: false - does not allow nested objects in query strings
app.use(express.json())
app.use(morgan('tiny'))                           // returns middleware that only parses JSON
app.use(express.static('public'))                   //static files
app.use(methodOverride('_method'));
app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


// Routes
const footballController = require('./controllers/football.js');
app.use('/footballs', footballController);

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
    res.status(404).json('Sorry, page not found')
})

app.get('/footballs', (req, res)=>{
    if(req.session.currentUser){
        res.json(req.session.currentUser);
    } else {
        res.status(401).json({
            status:401,
            message:'not logged in'
        })
    }
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})
