import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 12,
  },
  goalText: {
    color: "#fff",
  },
});

export default GoalItem;
