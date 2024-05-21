import { TProducts } from "./products.interface";
import { Product } from "./products.model";


const createProduct = async(payLoad: TProducts) =>{
    const result = await Product.create(payLoad);
    return result
}

export const ProductServices ={
    createProduct
}