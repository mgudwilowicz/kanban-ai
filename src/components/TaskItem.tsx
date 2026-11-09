import { Button, Card, Flex, Text } from "@radix-ui/themes";
import type { Task } from "../types";

type TaskItemProps = {
    task: Task;
    onUpdateTask: (id: string) => void;
}
export default function TaskItem({ task, onUpdateTask }: TaskItemProps) {

    const getButtonText = (state: string) => {
        switch (state) {
            case "todo":
                return "Start";
            case "in_progress":
                return "Done";
            case "done":
                return "Delete";
            default:
                return "Start";
        }
    }
    return (
        <Card style={{ padding: "1rem", margin: "0.5rem 0" }}>
            <Flex justify="start">
                <Text size="1" color="gray" >{new Date(task.updatedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
                </Text>
            </Flex>
            <Flex gap="2" align="center" justify="between" >
                <Text as="span" size="3" >
                    {task.title}
                </Text>
                <Button onClick={() => onUpdateTask(task.id)}>{getButtonText(task.state)}</Button>
            </Flex>
        </Card>
    );
}