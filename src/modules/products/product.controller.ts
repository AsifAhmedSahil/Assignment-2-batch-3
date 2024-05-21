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


const getProductById = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    const result = await ProductServices.getProductById(productId);
    res.json({
      success: true,
      message: " Products Retrive successfully",
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

const updateById = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    const updatedProductData =req.body
    const result = await ProductServices.updateById(productId,updatedProductData);
    res.json({
      success: true,
      message: " Products updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Product is not updated successfully",
      error: error,
    });
  }
};

const deletedById = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    console.log(productId , "delete")
    const result = await ProductServices.deletedById(productId);
    res.json({
      success: true,
      message: " Products deleted successfully from database",
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Product is not deleted successfully",
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
    // const { email } = req.query;
    // console.log(email)
    // if(email){
    //     const result = await ProductServices.getOrderByEmail({email});
    // }
  };

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  deletedById,
  updateById,
  createOrder,
  getAllOrders
};
