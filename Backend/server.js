const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require ('./middleware/errormiddleware')
const port =process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/greeting', require('./Routes/routes'))
app.use(errorHandler)

app.listen(port,()=>console.log(`Server started on port ${port}`))