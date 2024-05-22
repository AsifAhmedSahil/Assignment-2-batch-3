// new try
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { email, productId, quantity, price } = req.body;

//     // Call the service layer to create the order
//     const result = await ProductServices.createOrder({ email, productId, quantity, price });

//     // Return success response with the order details
//     res.json({
//       success: true,
//       message: "Order created successfully",
//       data: result,
//     });
//   } catch (error:any) {
//     // Handle any errors
//     console.error("Error creating order:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error",
//     });
//   }
// };

// const createOrder = async (req: Request, res: Response) => {
//   const result = await ProductServices.createOrder(req.body);
//   res.json({
//     success: true,
//     message: "order is added successfully",
//     data: result,
//   });
// };





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
// const createOrder = async (orderInfo:any) => {
//     try {
//       const { email, productId, quantity, price } = orderInfo;
      
//       // Retrieve the product from the database
//       const existingProduct = await Product.findById(productId);
      
//       if (!existingProduct) {
//         throw new Error("Product not found");
//       }
  
//       // Check if there's enough stock for the order
//       if (existingProduct.inventory.quantity < quantity) {
//         throw new Error("Insufficient stock");
//       }
  
//       // Reduce the quantity of the ordered product in the inventory
//       existingProduct.inventory.quantity -= quantity;
  
//       // Update the inStock property based on the remaining quantity
//       existingProduct.inventory.inStock = existingProduct.inventory.quantity > 0;
  
//       // Save the updated product
//       await existingProduct.save();
  
//       // Create the order
//       const result = await Order.create({
//         email,
//         productId,
//         quantity,
//         price,
//       });
  
//       return result;
//     } catch (error) {
//       throw error;
//     }
// }