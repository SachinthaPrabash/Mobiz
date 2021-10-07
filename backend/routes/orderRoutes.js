import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderbyID } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderbyID)



export default router