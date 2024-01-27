import { db } from "@/db";
import { NewTask, TaskEdit, TaskListItem, tasks } from "@/db/schema/tasks";
import { desc, eq } from "drizzle-orm";

export async function getAllTasks() {
  return (await db
    .select({
      id: tasks.id,
      title: tasks.title,
      status: tasks.status,
      updatedAt: tasks.updatedAt,
    })
    .from(tasks)
    .orderBy(desc(tasks.updatedAt))) as TaskListItem[];
}

export async function updateTask(task: TaskEdit) {
  return await db
    .update(tasks)
    .set({ ...task })
    .where(eq(tasks.id, task.id!))
    .returning({
      updatedTitle: tasks.title,
    });
}

export async function getTask(taskId: number) {
  return (await db
    .select({
      id: tasks.id,
      title: tasks.title,
      description: tasks.description,
      status: tasks.status,
      deadline: tasks.deadline,
    })
    .from(tasks)
    .where(eq(tasks.id, taskId))
    .get()) as TaskEdit;
}

export async function deleteTask(id: number) {
  return await db
    .delete(tasks)
    .where(eq(tasks.id, id))
    .returning({ deletedTitle: tasks.title });
}

export async function insertTask(newTask: NewTask) {
  return await db.insert(tasks).values(newTask).returning({
    insertedTitle: tasks.title,
  });
}
