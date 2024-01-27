"use client";

import { useAtomValue } from "jotai";
import EditTaskForm from "./ui/EditTaskForm";
import NewTaskForm from "./ui/NewTaskForm";
import { isEditingAtom } from "@/lib/atoms";

export default function TaskForm() {
  const isEditing = useAtomValue(isEditingAtom);

  return (
    <main className="w-full p-5 sm:p-0 md:w-1/2 xl:w-1/4 ">
      {isEditing ? <EditTaskForm /> : <NewTaskForm />}
    </main>
  );
}
