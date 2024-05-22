import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

// for product purpose only
router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProductById);
router.delete("/:productId", ProductController.deletedById);
router.put("/:productId", ProductController.updateById);

// error handling for routes
router.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export const ProductRoutes = router;
