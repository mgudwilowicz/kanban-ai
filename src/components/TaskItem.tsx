import { Card, Checkbox, Flex, Text } from "@radix-ui/themes";
import type { Task } from "../types";


export default function TaskItem({ task, onCompleteTask }: { task: Task, onCompleteTask: (id: string) => void }) {

    return (
        <Card style={{ padding: "1rem", margin: "0.5rem 0" }}>
            <Flex gap="2" align="center" justify="between" >
                <Text as="span" size="2" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.title}
                </Text>
                <Checkbox checked={task.completed} onCheckedChange={() => onCompleteTask(task.id)} />
            </Flex>
        </Card>
    );
}