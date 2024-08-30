const express=require('express')
const {
    getFunds,
    getFund,
    deleteFund,
    createFund,
    updateFund
}= require('../controllers/FundController')


const router=express.Router()

router.get('/', getFunds)

router.get('/:id', getFund)

router.post('/', createFund)

 router.delete('/:id', deleteFund)

 router.patch('/:id', updateFund)

module.exports = router