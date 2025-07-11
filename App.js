import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChangeModalVisible = () => {
    setIsModalVisible((prevVisible) => !prevVisible);
  };

  const handleAddGoal = (goalText) => {
    setGoalList((prevList) => [
      ...prevList,
      { text: goalText, id: Math.random().toString() },
    ]);
  };

  const handleDelete = (id) => {
    setGoalList((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      {isModalVisible && (
        <GoalInput
          onAddGoal={handleAddGoal}
          onToggleModal={handleChangeModalVisible}
          visible={isModalVisible}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={handleDelete}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <Button
        color={"#5e0acc"}
        title="Add New Goal"
        onPress={handleChangeModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 26,
    backgroundColor: "#311b6b",
  },
  goalsContainer: {
    flex: 7,
  },
});
