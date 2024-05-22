import  { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { Product } from "./products.model";
import { TOrders } from "./products.interface";
import { productValidationSchema } from "./product.validation";


const createProduct = async (req: Request, res: Response) => {
  
  // validation using zod
  const zodParsedData = productValidationSchema.parse(req.body)

  const result = await ProductServices.createProduct(zodParsedData);
  res.json({
    success: true,
    message: "Product is added successfully",
    data: result,
  });
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
      message: "Product is not updated successfully",
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

// create order old
// const createOrder = async (req: Request, res: Response) => {
    
//   try {
//     const result = await ProductServices.createOrder(req.body);
//     res.json({
//       success: true,
//       message: "Order created successfully",
//       data: result,
//     });
//   } catch (error:any) {

//     res.json({
//         success: false,
//         message: error.message
//       });

//   }
// };


// new try
const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, productId, quantity, price } = req.body;

    // Call the service layer to create the order
    const result = await ProductServices.createOrder({ email, productId, quantity, price });

    // Return success response with the order details
    res.json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
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
        : "All Orders Retrieved Successfully",
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
