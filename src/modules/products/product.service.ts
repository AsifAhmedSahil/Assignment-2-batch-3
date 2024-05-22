import {  TOrders, TProducts } from "./products.interface";
import { Order, Product } from "./products.model";


const createProduct = async(payLoad: TProducts) =>{
    const result = await Product.create(payLoad);
    return result
}
const getAllProducts = async() =>{
    const result = await Product.find();
    return result
}
const getProductBySearch = async(searchTerm: any ) =>{
    const result = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
    // const result = await Product.find();
    return result
}

const getProductById = async(id:string) =>{
    const result = await Product.findById(id);
    return result
}
const updateById = async(productId:string,updatedProductData:any) =>{
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


// old create order

// const createOrder = async(OrderInfo :any) =>{
//     try {
//         const { email, productId, quantity, price } = OrderInfo;
    
//         const existingProduct = await Product.findById(productId);
//         if (!existingProduct) {
//           throw new Error("Product not found");
//         }
    
//         // Check available quantity in inventory
//         if (existingProduct.inventory.quantity < quantity) {
//           throw new Error("Insufficient stock");
//         }
    
//         // Reduce the quantity of the ordered product in the inventory
//         existingProduct.inventory.quantity -= quantity;
    
//         // Update the inStock property based on the remaining quantity
//         existingProduct.inventory.inStock = existingProduct.inventory.quantity > 0;
    
//         // Save the updated product
//         await existingProduct.save();
    
//         // Create the order
//         const result = await Order.create({
//           email,
//           productId,
//           quantity,
//           price
//         });
    
//         return result;
//       } catch (error) {
//         console.log(error)
//       }
// }

// new try
const createOrder = async (orderInfo:any) => {
    try {
      const { email, productId, quantity, price } = orderInfo;
      
      // Retrieve the product from the database
      const existingProduct = await Product.findById(productId);
      
      if (!existingProduct) {
        throw new Error("Product not found");
      }
  
      // Check if there's enough stock for the order
      if (existingProduct.inventory.quantity < quantity) {
        throw new Error("Insufficient stock");
      }
  
      // Reduce the quantity of the ordered product in the inventory
      existingProduct.inventory.quantity -= quantity;
  
      // Update the inStock property based on the remaining quantity
      existingProduct.inventory.inStock = existingProduct.inventory.quantity > 0;
  
      // Save the updated product
      await existingProduct.save();
  
      // Create the order
      const result = await Order.create({
        email,
        productId,
        quantity,
        price,
      });
  
      return result;
    } catch (error) {
      throw error;
    }
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