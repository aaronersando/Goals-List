import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/target.png")}
        />
        <TextInput
          onChangeText={handleGoalText}
          style={styles.textInput}
          placeholder="Your Goal..."
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <Button
            color={"#f31282"}
            title="Cancel"
            onPress={props.onToggleModal}
          />
          <Button color={"#5e0acc"} title="Add Goal" onPress={handleAddGoal} />
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
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "100%",
    borderColor: "#e7daf9ff",
    backgroundColor: "#e7daf9ff",
    borderWidth: 1,
    color: "#120438",
    borderRadius: 18,
    padding: 16,
    marginRight: 8,
  },
  buttonContainer: {
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: 200,
    width: 200,
    margin: 16,
  },
});

export default GoalInput;
