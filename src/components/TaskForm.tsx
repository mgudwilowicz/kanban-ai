import { useState, type SubmitEvent } from "react"
import { Flex, TextField, Button } from "@radix-ui/themes";

type TaskFormProps = {
    onAddTask: (title: string) => void;
}
export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState("")

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        const trimmed = title.trim()
        if (!trimmed) return
        onAddTask(trimmed)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex my="6" gap="2" align="center" justify="center" >
                <TextField.Root
                    size="3"
                    style={{ width: "320px" }}
                    placeholder="Add task"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                <Button type="submit" aria-label="Add task" variant="outline">Add</Button>
            </Flex>
        </form>
    )
}