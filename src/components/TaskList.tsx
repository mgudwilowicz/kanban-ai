import { Card, Heading, Separator } from "@radix-ui/themes";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onCompleteTask }: { tasks: Task[], onCompleteTask: (id: string) => void }) {

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Card style={{ padding: "1rem" }} className="p-4">
                <Heading as="h1" size="3">To do:</Heading>
                <Separator my="3" size="4" />
                <ol style={{ listStyle: "none", padding: "0" }}>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onCompleteTask={onCompleteTask} />
                    ))}
                </ol>
            </Card>
        </div>
    );
}

export default TaskList;