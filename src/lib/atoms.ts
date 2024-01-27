import { NewTask } from "@/db/schema/tasks";
import { atom } from "jotai";

export const isEditingAtom = atom<boolean>(false);

export const taskEditDataAtom = atom<NewTask>({
  id: undefined,
  title: "",
  description: undefined,
  status: undefined,
  deadline: undefined,
});
