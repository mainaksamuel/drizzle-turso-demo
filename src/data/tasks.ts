import { db } from "@/db";
import { NewTask, TaskListItem, tasks } from "@/db/schema/tasks";
import { desc, eq } from "drizzle-orm";

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
