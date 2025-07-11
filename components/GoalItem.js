import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
