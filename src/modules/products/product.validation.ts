import * as z from "zod";


// Define a Zod schema for the product variant
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define a Zod schema for the product
export const productValidationSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string().min(1)),
  variants: z.array(variantSchema),
  inventory: z.object({
    quantity: z.number().nonnegative(),
    inStock: z.boolean(),
  }),
});
