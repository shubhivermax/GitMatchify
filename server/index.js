

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors= require('cors');
const mongoose = require('mongoose');

console.log('Connecting to mongoDB with:', process.env.MONGO_URL);
//database connection 
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('not connected', err));


const app = express();

app.use('/', require('./routes/authroutes')) 

const port =8000;

app.listen(port, () => console.log(`Server is running on port ${port}`)); 