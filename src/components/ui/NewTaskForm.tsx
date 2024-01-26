"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addTask } from "@/lib/actions";

const initialState = {
  message: "",
};

export default function NewTaskForm() {
  const [state, formAction] = useFormState(addTask, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col space-y-4 border-2 border-gray-400 p-2 rounded-xl mb-2 p-4">
          <h2 className="p-1 border-b-2">New Task</h2>
          <input
            name="title"
            id="title"
            type="text"
            required
            minLength={2}
            maxLength={25}
            className="text-center rounded-md p-1 text-black"
          />

          <select
            id="status"
            name="status"
            className="text-center text-black rounded-md p-1 flex-grow"
            required
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
            <option value="overdue">Overdue</option>
          </select>
          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>

          <button
            type="submit"
            aria-disabled={pending}
            className="border-2 border-gray-400 rounded-xl p-2 text-center flex flex-grow w-full h-full m-auto hover:bg-gray-800 active:scale-95 active:bg-gray-500 transition transform duration-100 ease-out"
          >
            <span className=" m-auto">Add</span>
          </button>
        </div>
      </form>
    </>
  );
}
