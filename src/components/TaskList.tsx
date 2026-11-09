import { Card, Heading, Separator } from "@radix-ui/themes";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

type TaskListProps = {
    tasks: Task[];
    heading: string;
    onUpdateTask: (id: string) => void;
}

function TaskList({ tasks, heading, onUpdateTask }: TaskListProps) {

    return (
        <Card style={{ padding: "1rem", display: "flex", flexDirection: "column", flex: 1 }} className="p-4">
            <Heading as="h1" size="3">{heading}:</Heading>
            <Separator my="3" size="4" />
            <ol style={{ listStyle: "none", padding: "0" }}>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} />
                ))}
            </ol>
        </Card>

    );
}

export default TaskList;