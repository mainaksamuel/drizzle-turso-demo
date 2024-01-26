import EditTaskForm from "./ui/EditTaskForm";
import NewTaskForm from "./ui/NewTaskForm";

export default function TaskForm() {
  return (
    <main className="w-full p-5 sm:p-0 md:w-1/2 xl:w-1/4 ">
      <EditTaskForm />
      <NewTaskForm />
    </main>
  );
}
