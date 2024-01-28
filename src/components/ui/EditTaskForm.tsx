"use client";

import { editTask } from "@/lib/actions";
import { isEditingAtom, taskEditDataAtom } from "@/lib/atoms";
import { useAtom, useSetAtom } from "jotai";
import { ChangeEvent, EventHandler, FormEvent, FormEventHandler } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

export default function EditTaskForm() {
  const [state, formAction] = useFormState(editTask, initialState);
  const { pending } = useFormStatus();

  const setIsEditing = useSetAtom(isEditingAtom);
  const [taskEditData, setTaskEditValue] = useAtom(taskEditDataAtom);

  const handleDataChange = (e: ChangeEvent<HTMLDataElement>) => {
    setTaskEditValue((taskEdit) => ({
      ...taskEdit,
      [`${e.target.id}`]: `${e.target.value}`,
    }));
  };

  const cancelEditTask = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
      <form
        className="w-full"
        action={async (formData) => {
          formAction(formData);
          setIsEditing(false);
        }}
      >
        <input name="task" type="hidden" value={taskEditData.id} />
        <div className="flex-1 flex-col space-y-4 border-2 border-gray-400 p-2 rounded-xl mb-2">
          <div className="py-2 border-b-2 flex items-center justify-between">
            <h1>Edit Task</h1>
            <button
              onClick={cancelEditTask}
              className="text-lg cursor-pointer rounded-xl text-center px-2  hover:scale-125 hover:bg-gray-500 active:scale-75 transition transform duration-100 ease-in ease-out"
            >
              X
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <label htmlFor="title" className="md:w-1/3">
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              value={taskEditData.title}
              required
              minLength={2}
              maxLength={25}
              className="rounded-md text-black flex-grow p-2 md:w-2/3"
              onChange={handleDataChange}
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
              value={taskEditData.description}
              rows={4}
              className="rounded-md text-black flex-grow p-2"
              onChange={handleDataChange}
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
              className="text-black rounded-md flex-grow p-2 md:2/3"
              onChange={handleDataChange}
            >
              <option selected={taskEditData.status === "todo"} value="todo">
                To Do
              </option>
              <option
                selected={taskEditData.status === "inprogress"}
                value="inprogress"
              >
                In Progress
              </option>
              <option selected={taskEditData.status === "done"} value="done">
                Done
              </option>
              <option
                selected={taskEditData.status === "overdue"}
                value="overdue"
              >
                Overdue
              </option>
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
              value={taskEditData.deadline}
              className="rounded-md text-black flex-grow p-2 md:2/3"
              onChange={handleDataChange}
            />
          </div>

          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>

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
