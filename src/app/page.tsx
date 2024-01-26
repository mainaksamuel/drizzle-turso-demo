import TaskForm from "@/components/TaskForm";
import TasksList from "@/components/TasksList";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4">
      <TaskForm />

      <hr className="mt-8 mb-4 border-4 border-teal-700 w-2/3 xl:w-1/3" />

      <TasksList />
    </main>
  );
}
