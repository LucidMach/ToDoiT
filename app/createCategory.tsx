import { categoriesAtom } from "@/atoms/config";
import GlassInButton from "@/components/GlassInButton";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

const CreateCategory: React.FC = () => {
  const { width, height } = Dimensions.get("window");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [categoryList, setCategoryList] = useAtom(categoriesAtom);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 8 }}>
        Create ToDoiT Category
      </Text>
      <TextInput
        placeholder="Enter Icon for the Category"
        placeholderTextColor="#1a1a1a"
        value={icon}
        onChangeText={(newText) => setIcon(newText)}
        style={{
          width: width - 32,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#d8d8d8",
          backgroundColor: "#fff",
          padding: 8,
        }}
      />
      <TextInput
        placeholder="Enter Name for the Category"
        placeholderTextColor="#1a1a1a"
        value={name}
        onChangeText={(newText) => setName(newText)}
        style={{
          width: width - 32,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#d8d8d8",
          backgroundColor: "#fff",
          padding: 8,
        }}
      />

      <GlassInButton
        onPress={(e) => {
          setCategoryList([
            ...categoryList,
            {
              name,
              icon,
              idx: categoryList.length,
            },
          ]);
          router.push("../");
        }}
      />
    </View>
  );
};

export default CreateCategory;
