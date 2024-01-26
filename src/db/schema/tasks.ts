import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", {
    enum: ["todo", "inprogress", "done", "overdue"],
  })
    .default("todo")
    .notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  deadline: text("deadline"),
});

export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;

export const insertTaskSchema = createInsertSchema(tasks, {
  id: (schema) => schema.id.positive(),
  title: z.string().min(2).max(25),
});

export const selectTaskSchema = createSelectSchema(tasks);
const taskPropSchema = selectTaskSchema.pick({
  id: true,
  title: true,
  status: true,
  updatedAt: true,
});

export type TaskListItem = z.infer<typeof taskPropSchema>;
