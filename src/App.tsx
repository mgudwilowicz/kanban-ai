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
      <TaskList tasks={tasks} />
    </>
  );
}

export default App
