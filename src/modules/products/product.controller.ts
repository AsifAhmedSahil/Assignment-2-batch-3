import express, { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProduct(req.body);
  res.json({
    success: true,
    message: "Product is added successfully",
    data: result,
  });
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.json({
      success: true,
      message: "All Products Retrive successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Product is not retrive successfully",
      error: error,
    });
  }
};

// for order purpose use only
const createOrder = async (req: Request, res: Response) => {
  const result = await ProductServices.createOrder(req.body);
  res.json({
    success: true,
    message: "Order created successfully",
    data: result,
  });
};
const getAllOrders = async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllOrders();
      res.json({
        success: true,
        message: "All Orders Retrive successfully",
        data: result,
      });
    } catch (error) {
      res.json({
        success: true,
        message: "Orders is not retrive successfully",
        error: error,
      });
    }
  };

export const ProductController = {
  createProduct,
  getAllProducts,
  createOrder,
  getAllOrders
};
