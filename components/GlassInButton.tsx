import { useState } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  Text,
} from "react-native";

interface props {
  onPress?: (event: GestureResponderEvent) => void;
}

const GlassInButton: React.FC<props> = ({ onPress }) => {
  const { width, height } = Dimensions.get("window");
  const [x, setX] = useState(0);

  return (
    <Pressable
      style={{
        borderWidth: 2,
        width: width - 32,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.7,
        shadowOffset: {
          height: x,
          width: x,
        },
      }}
      onPressIn={() => {
        setX(8);
      }}
      onPressOut={(e) => {
        if (onPress) onPress(e);
        setX(0);
      }}
    >
      <Text style={{ fontSize: 32 }}>+</Text>
    </Pressable>
  );
};

export default GlassInButton;
