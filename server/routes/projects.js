const express=require('express')
const {
    getProjects,
    getProject,
    createProject
}= require('../controllers/projectController')


const router=express.Router()

router.get('/', getProjects)

router.get('/:id', getProject)

router.post('/', createProject)

 router.delete('/:id', (req,res)=>{
    res.json({mssg:"delete a project"})
 })
 router.patch('/:id', (req,res)=>{
    res.json({mssg:"update a project"})
 })

module.exports = router