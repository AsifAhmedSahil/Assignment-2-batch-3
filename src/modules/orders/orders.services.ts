
import { Product } from "../products/products.model";
import { TOrders } from "./orders.interface";
import { Order } from "./orders.model";



// for order purpose only

const createOrder = async (payLoad: TOrders) => {
  
  const { email, productId, quantity, price } = payLoad;
  

  const existingProduct = await Product.findById(productId);

  if (!existingProduct) {
    throw new Error("Product not found - insert right productId please");
  }

  if (existingProduct.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  //   reduce product quantity after order successfully
  existingProduct.inventory.quantity -= quantity;

  //   check product is avalable or not
  existingProduct.inventory.inStock = existingProduct.inventory.quantity > 0;

  // update product information = if order is confirm then reduce the main product quantity
  await existingProduct.save();

  //   const result = await Order.create(payLoad);
  const result = await Order.create({
    email,
    productId,
    quantity,
    price,
  });
  return result;
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};
const getAllOrdersByEmail = async (email: any) => {
  try {
    const result = await Order.find({ email });
    return result;
  } catch (error) {
    throw new Error("Failed to retrieve all orders");
  }
};

export const OrderServices = {
  
  createOrder,
  getAllOrders,
  getAllOrdersByEmail,
  
};
