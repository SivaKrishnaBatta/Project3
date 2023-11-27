const express = require('express')
const app = express()
const port = 4000


const mainapi=require('./Controlers/router')
app.use('/api',mainapi)


app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`)
})