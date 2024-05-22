import { Request, Response } from "express";
import { ProductServices } from "./product.service";

import {
  
  productValidationSchema,
} from "./product.validation";
import { Product } from "./products.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    // validation using zod
  const zodParsedData = productValidationSchema.parse(req.body);

  const existingProduct = await Product.findOne({ name: zodParsedData.name });

  if (existingProduct) {
    return res.status(400).json({
      success: false,
      message: "Product already exists",
    });
  }

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
      result = await ProductServices.getProductBySearch(searchTerm as string);
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



export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  deletedById,
  updateById,
  
};
