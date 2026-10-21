import type { Task } from './types'

/// read and write the list

const STORAGE_KEY = 'kanban-tasks'

function isTask(value: unknown): value is Task {
    if (typeof value !== 'object' || value === null) return false
    const task = value as Record<string, unknown>
    return (
        typeof task.id === 'string' &&
        typeof task.title === 'string' &&
        typeof task.completed === 'boolean' &&
        typeof task.createdAt === 'number'
    )
}



export function loadTasks(): Task[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    try {
        const parsed: unknown = JSON.parse(raw)
        if (!Array.isArray(parsed)) return []
        return parsed.filter(isTask)
    } catch {
        return []
    }

}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

