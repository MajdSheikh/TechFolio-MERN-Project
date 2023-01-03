
require('dotenv').config();
const sessions = require('express-session');

// const dotenv = require("dotenv");
// dotenv.config();

require('./config/mongoose.config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
// const port = 8000;
// const port = process.env.PORT || 3000;

const port = process.env.PORT || 8000;

// const mode = process.env.NODE_ENV

const jwt = require("jsonwebtoken");

app.use(cookieParser());
// app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(express.static("Images"))

require('./routes/user.routes')(app);

app.listen(port, () => console.log('Listening on port: ',port));


// const oneDay = 1000 * 60 * 60 * 24;
// app.use(sessions({
//     secret: "portfolio",
//     saveUninitialized:true,
//     cookie: { 
//         httpOnly: true,
//         maxAge: oneDay },
//     resave: false 
// }));














