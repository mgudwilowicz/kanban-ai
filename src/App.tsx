import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import { loadTasks, saveTasks } from './storage'
import type { Task } from './types'
import TaskList from './components/TaskList'
import { Flex } from '@radix-ui/themes'




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
      title: title,
      state: "todo",
      createdAt: Date.now(),
      updatedAt: Date.now()

    }
    setTasks([...tasks, newTask])
  }
  function handleUpdateTask(id: string) {
    const updatedTasks: Task[] = tasks.map(task =>
      task.id === id
        ? { ...task, state: task.state === "todo" ? "in_progress" : "done", updatedAt: Date.now() }
        : task)
    setTasks(updatedTasks)
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <Flex
        direction={{ initial: "column", md: "row" }}
        justify='between'
        wrap='wrap'
        gap="6"
        style={{ width: "80vw", margin: "0 auto" }} >
        <TaskList tasks={tasks.filter(task => task.state === "todo")} heading="To do" onUpdateTask={handleUpdateTask} />
        <TaskList tasks={tasks.filter(task => task.state === "in_progress")} heading="In Progress" onUpdateTask={handleUpdateTask} />
        <TaskList tasks={tasks.filter(task => task.state === "done")} heading="Completed" onUpdateTask={handleUpdateTask} />
      </Flex >
    </>
  );
}

export default App
