import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#1d033fff", borderRadius: 12 }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 12,
    overflow: "hidden",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
    borderRadius: 12,
  },
});

export default GoalItem;
