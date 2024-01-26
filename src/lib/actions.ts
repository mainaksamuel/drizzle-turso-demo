"use server";

import { deleteTask, insertTask } from "@/data/tasks";
import { insertTaskSchema } from "@/db/schema/tasks";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function addTask(_prevState: any, formData: FormData) {
  try {
    const data = insertTaskSchema.parse({
      title: formData.get("title"),
      // status: formData.get("status"),
    });

    const newTask = await insertTask(data);
    revalidatePath("/");

    return { message: `Added task ${newTask[0].insertedTitle}` };
  } catch (e: any) {
    return { message: `Could not add new task` };
  }
}

export async function editTask(formData: FormData) {
  formData.forEach((value, field) => {
    console.log(`${field} := ${value}`);
  });
}

export async function removeTask(_prevState: any, formData: FormData) {
  try {
    const dataId = z
      .object({
        id: z.number().positive(),
        title: z.string().min(2).max(25),
      })
      .parse({
        id: Number(formData.get("id")),
        title: formData.get("task"),
      });

    const deletedTask = await deleteTask(dataId.id);
    revalidatePath("/");

    return { message: `Removed task ${deletedTask[0].deletedTitle}` };
  } catch (e: any) {
    console.log(`Could not remove task: `, e);
    return { message: `Could not remove task` };
  }
}
