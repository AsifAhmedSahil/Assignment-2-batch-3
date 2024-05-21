import express from "express"
import { ProductController } from "./product.controller";


const router = express.Router()

// for product purpose only
router.post("/products", ProductController.createProduct)

// for order purpose only
router.post("/orders" ,ProductController.createOrder)

export const ProductRoutes = router;