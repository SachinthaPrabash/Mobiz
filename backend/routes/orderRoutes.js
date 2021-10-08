import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderbyID, updateOrderToPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderbyID)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router