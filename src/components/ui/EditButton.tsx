"use client";

import { TaskListItem } from "@/db/schema/tasks";
import { isEditingAtom, taskEditDataAtom } from "@/lib/atoms";
import { useSetAtom } from "jotai";

export default function EditButton({ task }: { task: TaskListItem }) {
  const setIsEditing = useSetAtom(isEditingAtom);
  const setTaskEditData = useSetAtom(taskEditDataAtom);

  const handleEdit = () => {
    setTaskEditData((taskEdit) => ({
      ...taskEdit,
      id: task.id,
      title: task.title,
      status: task.status,
      updatedAt: task.updatedAt,
    }));

    setIsEditing(true);
  };

  return (
    <div
      onClick={handleEdit}
      className="cursor-pointer text-teal-400 active:scale-75 hover:scale-150 transition transform duration-100 ease-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    </div>
  );
}
