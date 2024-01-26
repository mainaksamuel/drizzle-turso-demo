import EditTaskForm from "./ui/EditTaskForm";
import NewTaskForm from "./ui/NewTaskForm";

export default function TaskForm() {
  return (
    <main className="w-1/4">
      <EditTaskForm />
      <NewTaskForm />
    </main>
  );
}
