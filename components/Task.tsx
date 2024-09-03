import todo from "@/types/todo";
import { GestureResponderEvent, Pressable, Text } from "react-native";

interface props {
  item: todo;
  onPress?: (event: GestureResponderEvent) => void;
}

const Task: React.FC<props> = ({ item, onPress }) => {
  return (
    <Pressable
      style={{ flexDirection: "row" }}
      onPress={(e) => {
        if (onPress) onPress(e);
      }}
    >
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {item.completed ? "[x]" : "[ ]"}
      </Text>
      <Text
        style={{
          fontSize: 16,
          flex: 1,
        }}
      >
        {item.task}
      </Text>
    </Pressable>
  );
};

export default Task;
