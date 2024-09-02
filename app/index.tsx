import GlassInButton from "@/components/GlassInButton";
import GlassInTwoButton from "@/components/GlassInTwoButton";
import { FlatList, SafeAreaView } from "react-native";
import { categoriesAtom } from "@/atoms/config";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { saveData } from "@/utils/storage";

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
        renderItem={({ item }) => <GlassInTwoButton item={item} />}
      />
      <GlassInButton
        onPress={(e) =>
          setCategoryList([
            ...categoryList,
            {
              name: "Study",
              icon: "📚",
              idx: categoryList.length,
            },
          ])
        }
      />
    </SafeAreaView>
  );
}
