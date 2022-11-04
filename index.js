
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Welcome to Home Page');
})

app.listen(PORT, ()=>{
    console.log(`connecting to PORT :${PORT}`)
})