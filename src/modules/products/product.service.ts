import { TOrders, TProducts } from "./products.interface";
import { Order, Product } from "./products.model";


const createProduct = async(payLoad: TProducts) =>{
    const result = await Product.create(payLoad);
    return result
}

// for order purpose only
const createOrder = async(payLoad: TOrders) =>{
    const result = await Order.create(payLoad);
    return result
}

export const ProductServices ={
    createProduct,
    createOrder
}