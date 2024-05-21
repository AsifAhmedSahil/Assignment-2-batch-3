import express, { Request, Response } from "express"
import { ProductServices } from "./product.service"

const createProduct = async(req:Request , res:Response) =>{
   
    const result = await ProductServices.createProduct(req.body)
    res.json({
        success: true,
        message: "Product is added successfully",
        data: result
    })
}

// for order purpose use only
const createOrder = async(req:Request , res:Response) =>{
   
    const result = await ProductServices.createOrder(req.body)
    res.json({
        success: true,
        message: "Order created successfully",
        data: result
    })
}

export const ProductController = {
    createProduct,
    createOrder
}