import GlassInButton from "@/components/GlassInButton";
import GlassInTwoButton from "@/components/GlassInTwoButton";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import category from "@/types/categories";
import { useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState<category[]>([]);
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
            },
          ])
        }
      />
    </SafeAreaView>
  );
}
