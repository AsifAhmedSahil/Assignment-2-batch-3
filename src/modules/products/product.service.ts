import { TOrders, TProducts } from "./products.interface";
import { Order, Product } from "./products.model";


const createProduct = async(payLoad: TProducts) =>{
    const result = await Product.create(payLoad);
    return result
}
const getAllProducts = async() =>{
    const result = await Product.find();
    return result
}
const getProductById = async(id:string) =>{
    const result = await Product.findById(id);
    return result
}


// for order purpose only
const createOrder = async(payLoad: TOrders) =>{
    const result = await Order.create(payLoad);
    return result
}

const getAllOrders = async() =>{
    const result = await Order.find();
    return result
}

export const ProductServices ={
    createProduct,
    getAllProducts,
    getProductById,
    createOrder,
    getAllOrders
}