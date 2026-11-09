import { z } from "zod"
import { taskSchema, type Task } from './types'

/// read and write the list

const STORAGE_KEY = 'kanban-tasks'

const tasksSchema = z.array(taskSchema)


export function loadTasks(): Task[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    try {
        const parsed: unknown = JSON.parse(raw)
        const result = tasksSchema.safeParse(parsed)
        return result.success ? result.data : []
    } catch {
        return []
    }

}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

