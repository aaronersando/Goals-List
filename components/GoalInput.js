import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  const handleGoalText = (enteredText) => {
    setGoalText(enteredText);
  };

  const handleAddGoal = () => {
    props.onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalText}
        style={styles.textInput}
        placeholder="Your Goal..."
        value={goalText}
      />
      <Button color={"#5e0acc"} title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  textInput: {
    width: "70%",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 18,
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
