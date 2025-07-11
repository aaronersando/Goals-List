import { View, Button, TextInput, StyleSheet, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalText}
          style={styles.textInput}
          placeholder="Your Goal..."
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <Button color={"#5e0acc"} title="Add Goal" onPress={handleAddGoal} />
          <Button
            color={"#5e0acc"}
            title="Cancel"
            onPress={props.onToggleModal}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 16,
  },
  textInput: {
    width: "100%",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 18,
    padding: 8,
    marginRight: 8,
  },
  buttonContainer: {
    marginTop: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default GoalInput;
