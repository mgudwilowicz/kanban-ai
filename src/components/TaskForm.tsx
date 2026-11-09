import { useState, type SubmitEvent } from "react"
import { Flex, TextField, Button } from "@radix-ui/themes";
import { taskSchema } from "../types";

type TaskFormProps = {
    onAddTask: (title: string) => void;
}
export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>("")

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        const result = taskSchema.shape.title.safeParse(title.trim())
        if (!result.success) {
            setError(result.error.issues[0].message)
            return
        }
        onAddTask(result.data)
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex my="6" gap="2" align="center" justify="center" >

                <TextField.Root
                    size="3"
                    style={{ width: "320px" }}
                    placeholder="Add task"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                        setError(null)
                    }}
                />
                <Button type="submit" aria-label="Add task" variant="outline">Add</Button>
            </Flex>
            {error ? <p>{error}</p> : null}
        </form>
    )
}

