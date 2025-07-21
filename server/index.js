const express = require('express');
const dotenv = require('dotenv');
const cors= require('cors');


const app = express();

app.use('/', require('./routes/authroutes')) 

const port =8000;

app.listen(port, () => console.log(`Server is running on port ${port}`)); 