import { Schema, model } from "mongoose";
import { TProducts, TVarient } from "./products.interface";

const varientSchema = new Schema<TVarient>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<TProducts>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [varientSchema], required: true },
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const Product = model<TProducts>("Product",productSchema)
