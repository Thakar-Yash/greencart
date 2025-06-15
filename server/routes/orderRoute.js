import express from 'express'
import authUser from "../middleware/authUser.js"
import { getAllOrders, getUserOrders, placeOrderCOD, /* placeOrderStripe */ } from '../controllers/ordersController.js'
import authSeller from '../middleware/authSeller.js'

const orderRouter = express.Router()

orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.post('/cod', authUser, placeOrderCOD)
// orderRouter.post('/stripe', authUser, placeOrderStripe)

export default orderRouter