import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function IconButton({ onPress, icon, color, size }) {
  return (
    <Pressable style={styles.pressed} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color}></Ionicons>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
