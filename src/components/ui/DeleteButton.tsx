"use client";

import { useFormState, useFormStatus } from "react-dom";
import { removeTask } from "@/lib/actions";

interface DeleteButtonProps {
  taskId: number;
  taskTitle: string;
}

const initialState = {
  message: "",
};

export default function DeleteButton({ taskId, taskTitle }: DeleteButtonProps) {
  const [state, formAction] = useFormState(removeTask, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <input name="id" type="hidden" value={taskId} />
      <input name="task" type="hidden" value={taskTitle} />
      <div className="cursor-pointer text-red-400 active:scale-50 hover:scale-150 transition transform duration-100 ease-out">
        <button type="submit" aria-disabled={pending}>
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
