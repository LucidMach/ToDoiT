import category from "@/types/categories";
import * as SecureStore from "expo-secure-store";

export const saveData = async (key: string, value: category[]) => {
  try {
    const data = JSON.stringify(value);
    await SecureStore.setItemAsync(key, data);
  } catch (e) {
    throw e;
  }
};

export const fetchData = async (key: string) => {
  try {
    const data = await SecureStore.getItemAsync(key);
    if (data) return JSON.parse(data);
  } catch (e) {
    throw e;
  }
};
