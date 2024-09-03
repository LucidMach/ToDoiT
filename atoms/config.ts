import category from "@/types/categories";
import todo from "@/types/todo";
import { atom } from "jotai";

export const categoriesAtom = atom<category[]>([]);
export const todoAtom = atom<todo[]>([]);
