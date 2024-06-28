import { z } from "zod"
 
export const MyFormSchema = z.object({
  username: z.string().min(2).max(50),
})