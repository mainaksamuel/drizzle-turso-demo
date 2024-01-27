import { atom } from "jotai";

export const isEditingAtom = atom<boolean>(false);

export const taskEditDataAtom = atom({
  id: 0,
  title: "",
  description: undefined,
  status: "",
  updatedAt: "",
  deadline: undefined,
});
