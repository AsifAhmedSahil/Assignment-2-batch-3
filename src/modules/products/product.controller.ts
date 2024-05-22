import { Request, Response } from "express";
import { ProductServices } from "./product.service";

import {
  orderValidationSchema,
  productValidationSchema,
} from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    // validation using zod
  const zodParsedData = productValidationSchema.parse(req.body);

  const result = await ProductServices.createProduct(zodParsedData);
  res.json({
    success: true,
    message: "Product is added successfully",
    data: result,
  });
  } catch (error) {
    res.json({
      success: false,
      message: "Product is not added successfully",
      
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    let result;
    const { searchTerm } = req.query;
    if (searchTerm) {
      result = await ProductServices.getProductBySearch(searchTerm);
    } else {
      result = await ProductServices.getAllProducts();
    }

    res.json({
      success: true,
      message: searchTerm
        ? `Products matching search term ${searchTerm} fetched successfully!`
        : "All Products Retrieved Successfully",
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
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.json({
      success: true,
      message: `productId: ${productId}  Retrive successfully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "There are no product ",
      error: error,
    });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProductData = req.body;
    const result = await ProductServices.updateById(
      productId,
      updatedProductData
    );
    res.json({
      success: true,
      message: " Products updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Product is not updated ",
      error: error,
    });
  }
};

const deletedById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId, "delete");
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
  try {
    // validation using zod
  const zodParsedData = orderValidationSchema.parse(req.body)
  console.log("zodparse data",zodParsedData)
  

  const result = await ProductServices.createOrder(zodParsedData);
 
  res.json({
    success: true,
    message: "order is added successfully",
    data: result,
  });
  } catch (error :any) {
    res.json({
      success: false,
      message: error.message ||"order not found!",
      
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    let result;
    const { email } = req.query;

    // conditions for email query and all order query
    if (email) {
      result = await ProductServices.getAllOrdersByEmail(email);
    } else {
      result = await ProductServices.getAllOrders();
    }

    res.json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,

      message: "oops , there are no orders",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  deletedById,
  updateById,
  createOrder,
  getAllOrders,
};
