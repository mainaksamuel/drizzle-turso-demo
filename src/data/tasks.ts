import { db } from "@/db";
import { NewTask, Task, tasks } from "@/db/schema/tasks";
import { desc, eq, sql } from "drizzle-orm";

export async function getAllTasks() {
  return (await db
    .select()
    .from(tasks)
    .orderBy(desc(tasks.updatedAt))) as Task[];
}

export async function updateTask(task: NewTask) {
  return await db
    .update(tasks)
    .set({ ...task, updatedAt: sql`CURRENT_TIMESTAMP` })
    .where(eq(tasks.id, task.id!))
    .returning({
      updatedTitle: tasks.title,
    });
}

export async function getTask(taskId: number) {
  return (await db
    .select()
    .from(tasks)
    .where(eq(tasks.id, taskId))
    .get()) as Task;
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
