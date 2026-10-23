import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import { loadTasks, saveTasks } from './storage'
import type { Task } from './types'
import TaskList from './components/TaskList'




function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  function handleCompleteTask(id: string): void {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed, updatedAt: Date.now() } : task)
    setTasks(updatedTasks)
  }

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now()

    }
    setTasks([...tasks, newTask])
  }
  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />
    </>
  );
}

export default App
