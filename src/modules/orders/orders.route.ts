import express from "express";

import { OrderController } from "./orders.controller";

const router = express.Router();

// for order purpose only
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);
router.get("/:email", OrderController.getAllOrders);

// error handling for routes
router.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export const OrderRoutes = router;
