import express from "express"
import { ProductController } from "./product.controller";


const router = express.Router()

// for product purpose only
router.post("/products", ProductController.createProduct)
router.get("/products", ProductController.getAllProducts)
router.get("/products/:productId", ProductController.getProductById)
router.delete("/products/:productId", ProductController.deletedById)
router.put("/products/:productId", ProductController.updateById)


// for order purpose only
router.post("/orders" ,ProductController.createOrder)
router.get("/orders" ,ProductController.getAllOrders)

export const ProductRoutes = router;