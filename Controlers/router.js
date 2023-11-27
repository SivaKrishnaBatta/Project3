const express=require('express')
const router=express.Router()


const arth=require('./Arithmatic')
router.use('/arth',arth)

module.exports=router                               