import { Request, Response } from "express";

import { orderValidationSchema } from "./orders.validation";
import { OrderServices } from "./orders.services";





// for order purpose use only
const createOrder = async (req: Request, res: Response) => {
  try {
    // validation using zod
  const zodParsedData = orderValidationSchema.parse(req.body)
  console.log("zodparse data",zodParsedData)
  

  const result = await OrderServices.createOrder(zodParsedData);
 
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
      result = await OrderServices.getAllOrdersByEmail(email);
    } else {
      result = await OrderServices.getAllOrders();
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

export const OrderController = {
  
  createOrder,
  getAllOrders,
};
