import GlassInButton from "@/components/GlassInButton";
import GlassInTwoButton from "@/components/GlassInTwoButton";
import Task from "@/components/Task";
import todo from "@/types/todo";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

const ToDos: React.FC = () => {
  const { category } = useLocalSearchParams();

  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState<todo[]>([
    {
      task: "complete building todoist functionality",
      completed: false,
      idx: 0,
    },
    { task: "set up expo", completed: true, idx: 1 },
  ]);
  const [open, setOpen] = useState(true);

  const toggleTasks = (item: todo) => {
    const updatedList = taskList.map((element) => {
      if (element.idx === item.idx) {
        return { ...element, completed: !element.completed };
      }
      return element;
    });
    setTaskList(updatedList);
  };

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 32, fontWeight: 600 }}>{category}</Text>
      {taskList.map((item) =>
        !item.completed ? (
          <Task
            key={item.idx} // Assuming 'idx' is a unique identifier
            item={item}
            onPress={() => toggleTasks(item)}
          />
        ) : null
      )}
      <Pressable onPress={() => setOpen((open) => !open)}>
        <Text style={{ fontSize: 24, paddingVertical: 8, borderWidth: 2 }}>
          Completed
        </Text>
      </Pressable>
      {open
        ? taskList.map((item) =>
            item.completed ? (
              <Task
                key={item.idx} // Assuming 'idx' is a unique identifier
                item={item}
                onPress={() => toggleTasks(item)}
              />
            ) : null
          )
        : null}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Enter Your ToDoiT"
          placeholderTextColor="#1a1a1a"
          value={taskName}
          onChangeText={(newText) => setTaskName(newText)}
          style={{
            width: "90%",
            borderWidth: 1,
            borderRadius: 32,
            borderColor: "#1a1a1a",
            paddingVertical: 2,
            paddingHorizontal: 16,
          }}
        />
        <GlassInButton
          onPress={() => {
            setTaskList([
              ...taskList,
              { task: taskName, completed: false, idx: taskList.length },
            ]);
            setTaskName("");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToDos;
