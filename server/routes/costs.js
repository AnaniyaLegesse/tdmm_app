const express=require('express')
const {
    getCosts,
    getCost,
    deleteCost,
    createCost,
    updateCost
}= require('../controllers/CostController')


const router=express.Router()

router.get('/', getCosts)

router.get('/:id', getCost)

router.post('/', createCost)

 router.delete('/:id', deleteCost)

 router.patch('/:id', updateCost)

module.exports = router