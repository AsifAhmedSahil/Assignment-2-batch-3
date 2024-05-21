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
const getProductBySearch = async(searchTerm :any) =>{
    const result = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
    // const result = await Product.find();
    return result
}

const getProductById = async(id:string) =>{
    const result = await Product.findById(id);
    return result
}
const updateById = async(productId:any,updatedProductData:any) =>{
    const result = await Product.updateOne({_id: productId} , updatedProductData);
    return result
}
const deletedById = async(id:string) =>{
    // console.log(id)
    const result = await Product.findByIdAndDelete(id);
    // console.log(result)
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
const getAllOrdersByEmail = async(email: any) =>{
    try {
        const result = await Order.find({email});
        return result;
    } catch (error) {
        throw new Error("Failed to retrieve all orders");
    }
}
// const getOrderByEmail = async(email:string) =>{
//     const result = await Order.find({email:email});
//     return result
// }

export const ProductServices ={
    createProduct,
    getAllProducts,
    getProductById,
    deletedById,
    updateById,
    createOrder,
    getAllOrders,
    getAllOrdersByEmail,
    getProductBySearch
   
}