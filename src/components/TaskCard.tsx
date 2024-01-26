import { TaskListItem } from "@/db/schema/tasks";
import EditButton from "./ui/EditButton";
import DeleteButton from "./ui/DeleteButton";

interface TaskCardProps {
  task: TaskListItem;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex border-2 border-gray-400 rounded-xl justify-between p-3 hover:bg-gray-800">
      <p className="text-wrap">{task.title}</p>
      <div className="flex space-x-4">
        <EditButton taskId={task.id} />
        <DeleteButton taskId={task.id} taskTitle={task.title} />
      </div>
    </div>
  );
}
