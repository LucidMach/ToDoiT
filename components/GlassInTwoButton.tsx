import { categoriesAtom } from "@/atoms/config";
import category from "@/types/categories";
import { useAtom } from "jotai";
import { useState } from "react";
import {
  Pressable,
  Text,
  Dimensions,
  GestureResponderEvent,
} from "react-native";

interface props {
  item: category;
  onPress?: (event: GestureResponderEvent) => void;
}

const GlassTwoInButton: React.FC<props> = ({ item, onPress }) => {
  const { width, height } = Dimensions.get("window");
  const [categoryList, setCategoryList] = useAtom(categoriesAtom);
  const [x, setX] = useState(0);

  return (
    <Pressable
      style={{
        flexDirection: "row",
        width: width - 32,
        borderRadius: 32,
        borderWidth: 2,
        gap: 16,
        margin: 4,
        paddingHorizontal: 40,
        paddingVertical: 2,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.7,
        shadowOffset: {
          height: x,
          width: x,
        },
      }}
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
            });
        });
        setCategoryList(newList);
        console.log(newList);
      }}
      onPressIn={() => setX(8)}
      onPressOut={(e) => {
        setX(0);
        if (onPress) onPress(e);
      }}
    >
      <Text
        style={{
          fontSize: 32,
        }}
      >
        {item.icon}
      </Text>
      <Text
        style={{
          fontSize: 16,
          flex: 1,
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
    </Pressable>
  );
};

export default GlassTwoInButton;
