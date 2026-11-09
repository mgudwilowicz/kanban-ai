import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  title: z.string()
    .min(2, "Your title is too short. Enter a title with at least 2 characters. ")
    .max(50, "Your title is too long. Please shorten it to 50 characters. "),
  state: z.enum(["todo", "in_progress", "done"]),
  createdAt: z.number(),
  updatedAt: z.number(),
})


export type Task = z.infer<typeof taskSchema>


