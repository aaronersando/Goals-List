import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  const handleGoalText = (enteredText) => {
    setGoalText(enteredText);
  };

  const handleAddGoal = () => {
    setGoalList((prevList) => [...prevList, goalText]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalText}
          style={styles.textInput}
          placeholder="Your Goal..."
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 7,
  },
});
