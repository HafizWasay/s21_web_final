"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {MyFormSchema} from "@/schemas/loremSchema"


export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof MyFormSchema>>({
    resolver: zodResolver(MyFormSchema),
    defaultValues: {
      username: "text",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof MyFormSchema>) {
    console.log(values);
    
  }
}
function useForm<T>(arg0: unknown) {
  throw new Error("Function not implemented.")
}

