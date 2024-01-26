import { getAllTasks } from "@/data/tasks";
import TaskCard from "./TaskCard";

export default async function TasksList() {
  const tasks = await getAllTasks();

  return (
    <main className="mt-4 w-full p-5 sm:p-0 md:w-1/2 xl:w-1/4 ">
      <h1 className="text-2xl mb-2">Tasks</h1>

      <div className="flex flex-col space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
