const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"Get all projects"})
})

router.get('/:id', (req,res)=>{
    res.json({mssg:"Get a single project"})
})

router.post('/',(req,res)=>{
    res.json({mssg:'post a new project'})
})
 router.delete('/:id', (req,res)=>{
    res.json({mssg:"delete a project"})
 })
 router.patch('/:id', (req,res)=>{
    res.json({mssg:"update a project"})
 })

module.exports = router