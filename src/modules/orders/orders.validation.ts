import * as z from 'zod';






// Define a Zod schema for the order
export const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string().min(1),
  price: z.number().positive(),
  quantity: z.number().positive(),
});
