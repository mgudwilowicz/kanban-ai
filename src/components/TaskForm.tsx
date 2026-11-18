import { useState, type SubmitEvent } from "react"
import { Flex, TextField, Button, Dialog } from "@radix-ui/themes";
import { taskSchema } from "../types";
import Alert from "./Alert";

type TaskFormProps = {
    onAddTask: (title: string) => void;
}
export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>("")
    const [open, setOpen] = useState(false)

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        const result = taskSchema.shape.title.safeParse(title.trim())
        if (!result.success) {
            setError(result.error.issues[0].message)
            return
        }
        onAddTask(result.data)
        setTitle("")
        setOpen(false)

    }

    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>
                    <Flex justify="center" my="8">
                        <Button>Add new task</Button>
                    </Flex>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="600px">
                    <Dialog.Title>Add task</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Enter a title for the new task.
                    </Dialog.Description>

                    <form onSubmit={handleSubmit}>

                        <TextField.Root
                            size="3"
                            placeholder="Add task"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value)
                                setError(null)
                            }}
                        />
                        {error &&
                            <Flex my="4" justify="center">
                                <Alert message={error} />
                            </Flex>}

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button type="submit">Save</Button>
                            </Dialog.Close>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </>
    )
}

