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

export const ProductController = {
    createProduct
}