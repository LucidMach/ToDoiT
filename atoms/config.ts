import category from "@/types/categories";
import { atom } from "jotai";

export const categoriesAtom = atom<category[]>([]);
