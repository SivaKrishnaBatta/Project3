const express=require('express')
const router=express.Router()







const sin=[
    {id:0,sin0:'0'},
    {id:30,sin30:'1/2'},
    {id:45,sin45:'1/√2'},
    {id:60,sin60:'√3/2'},
    {id:90,sin90:'1'},
    {id:180,sin180:'0'},
    {id:270,sin270:'-1'},
    {id:360,sin360:'0'},
 ]
 const cos=[
    {id:0,cos0:'1'},
    {id:30,cos30:'V3/2'},
    {id:45,cos45:'1/√2'},
    {id:60,cos60:'1/2'},
    {id:90,cos90:'0'},
    {id:180,cos180:'-1'},
    {id:270,cos70:'0'},
    {id:360,cos360:'1'},
 ]
 const tan=[
    {id:0,tan0:'0'},
    {id:30,tan30:'1/V3'},
    {id:45,tan45:'1'},
    {id:60,tan60:'V3'},
    {id:90,tan90:'∞'},
    {id:180,tan180:'0'},
    {id:270,tan270:'∞'},
    {id:360,tan360:'0'},
 ]
 const cot=[
    {id:0,cot0:'∞'},
    {id:30,cot30:'V3'},
    {id:45,cot45:'1'},
    {id:60,cot60:'1/V3'},
    {id:90,cot90:'0'},
    {id:180,cot180:'∞'},
    {id:270,cot270:'0'},
    {id:360,cot360:'∞'},
 ]

 const cosec=[
    {id:0,cosec0:'∞'},
    {id:30,cosec30:'2'},
    {id:45,cosec45:'√2'},
    {id:60,cosec60:'2/V3'},
    {id:90,cosec90:'1'},
    {id:180,cosec180:'∞'},
    {id:270,cosec270:'-1'},
    {id:360,cosec360:'∞'},
 ]
 
 const sec=[
    {id:0,sec0:'1'},
    {id:30,sec30:'2/V3'},
    {id:45,sec45:'√2'},
    {id:60,sec60:'2'},
    {id:90,sec90:'∞'},
    {id:180,sec180:'-1'},
    {id:270,sec270:'∞'},
    {id:360,sec360:'1'},
 ]





router.get('/sin/:id',(req,res)=>{
    try{
        console.log(req.params)
        let sins=sin.find(sins=>sins.id===parseInt(req.params.id))
        
    
        res.status(200).send(sins)
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
    
 
    
})


router.get('/cos/:id',(req,res)=>{
    try{
        console.log(req.params)
        let coss=cos.find(trigonometry=>trigonometry.id===parseInt(req.params.id))
        res.status(200).send(coss)
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
})

router.get('/tan/:id',(req,res)=>{
    try{
        console.log(req.params)
        let coss=tan.find(trigonometry=>trigonometry.id===parseInt(req.params.id))
        
        res.status(200).send(coss)
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
})



//cot
router.get('/cot/:id',(req,res)=>{
    try{
        console.log(req.params)
        let coss=cot.find(trigonometry=>trigonometry.id===parseInt(req.params.id))
        
        res.status(200).send(coss)
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
})


//cosec
router.get('/cosec/:id',(req,res)=>{
    try{
        console.log(req.params)
        let coss=cosec.find(trigonometry=>trigonometry.id===parseInt(req.params.id))
        
        res.status(200).send({error:false +`${coss}`})
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
})


//sec
router.get('/sec/:id',(req,res)=>{
    try{
        console.log(req.params)
        let coss=sec.find(trigonometry=>trigonometry.id===parseInt(req.params.id))
        
        res.status(200).send(coss)
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
     }
})


module.exports=router