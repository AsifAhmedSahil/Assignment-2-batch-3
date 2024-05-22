import { TOrders, TProducts } from "./products.interface";
import { Order, Product } from "./products.model";

const createProduct = async (payLoad: TProducts) => {
  const result = await Product.create(payLoad);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};
const getProductBySearch = async (searchTerm: any) => {
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  // const result = await Product.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateById = async (productId: string, updatedProductData: any) => {
  const result = await Product.updateOne(
    { _id: productId },
    updatedProductData
  );
  return result;
};
const deletedById = async (id: string) => {
  // console.log(id)
  const result = await Product.findByIdAndDelete(id);
  // console.log(result)
  return result;
};

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

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  deletedById,
  updateById,
  createOrder,
  getAllOrders,
  getAllOrdersByEmail,
  getProductBySearch,
};
