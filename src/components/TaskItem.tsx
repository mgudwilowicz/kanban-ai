import { Card, Checkbox, Flex, Text } from "@radix-ui/themes";
import type { Task } from "../types";
export default function TaskItem({ task }: { task: Task }) {
    return (
        <Card style={{ padding: "1rem", margin: "0.5rem 0" }}>
            <Flex gap="2" align="center" justify="between" >
                <Text as="span" size="2" >
                    {task.title}
                </Text>
                <Checkbox defaultChecked={task.completed} />
            </Flex>
        </Card>
    );
}