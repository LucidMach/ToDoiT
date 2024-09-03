import GlassInButton from "@/components/GlassInButton";
import GlassInTwoButton from "@/components/GlassInTwoButton";
import { FlatList, SafeAreaView, Text } from "react-native";
import { categoriesAtom } from "@/atoms/config";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { saveData } from "@/utils/storage";
import { router } from "expo-router";
import category from "@/types/categories";

export default function Home() {
  const [categoryList, setCategoryList] = useAtom(categoriesAtom);

  useEffect(() => {
    saveData("categories", categoryList);
    console.log("updated local store");
  }, [categoryList]);

  return (
    <SafeAreaView
      style={{
        gap: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <GlassInTwoButton
            item={item}
            onPress={() => router.push(`/${item.name}`)}
            onLongPress={() => {
              const list = categoryList;
              const newList: category[] = [];
              // so loops over old list, if curr index is not "to be deleted index" adds item to a new list while indexing it according to the new list
              list.forEach((element, idx) => {
                if (element.idx < item.idx || element.idx > item.idx)
                  newList.push({
                    icon: element.icon,
                    idx: newList.length,
                    name: element.name,
                    todos: element.todos,
                  });
              });
              setCategoryList(newList);
            }}
          />
        )}
      />
      <GlassInButton onPress={() => router.push("/createCategory")} />
    </SafeAreaView>
  );
}
