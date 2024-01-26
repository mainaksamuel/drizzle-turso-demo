"use client";

import { useFormStatus } from "react-dom";

export default function EditTaskForm() {
  const { pending } = useFormStatus();

  return (
    <>
      <form className="w-full">
        <div className="flex-1 flex-col space-y-4 border-2 border-gray-400 p-2 rounded-xl mb-2">
          <div className="py-2 border-b-2">Edit Task</div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="title" className="md:w-1/3">
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              required
              minLength={2}
              maxLength={25}
              className="rounded-md text-black flex-grow p-2"
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="description" className="md:w-1/3">
              Description
            </label>
            <textarea
              cols={20}
              id="description"
              name="description"
              rows={4}
              className="rounded-md text-black flex-grow p-2"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="status" className="md:w-1/3">
              Status
            </label>
            <select
              id="status"
              name="status"
              required
              className="text-black rounded-md flex-grow p-2"
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="deadline" className="md:w-1/3">
              Deadline
            </label>
            <input
              name="deadline"
              id="deadline"
              type="date"
              className="rounded-md text-black flex-grow p-2"
            />
          </div>

          <button
            type="submit"
            aria-disabled={pending}
            className="border-2 border-gray-400 rounded-md py-2 text-center flex flex-grow w-full hover:bg-gray-800 active:scale-95 active:bg-gray-500 transition transform duration-100 ease-out"
          >
            <span className=" m-auto">Edit</span>
          </button>
        </div>
      </form>
    </>
  );
}
