import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProduct = async (payLoad: TProducts) => {
    
  const result = await Product.create(payLoad);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};
const getProductBySearch = async (searchTerm: string) => {
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateById = async (productId: string, updatedProductData: any) => {
    console.log(updatedProductData)
  const result = await Product.updateOne(
    { _id: productId },
    updatedProductData
  );
  return result;
};
const deletedById = async (id: string) => {
  
  const result = await Product.findByIdAndDelete(id);
  
  return result;
};



export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  deletedById,
  updateById,
  getProductBySearch,
};
