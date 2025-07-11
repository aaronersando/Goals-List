import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View styles={styles.header}>
          <Text style={styles.headerText}>Your Goals</Text>
        </View>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 30,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 7,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#5e0acc",
    width: "100%",
    padding: 12,
    textAlign: "center",
    borderRadius: 16,
    marginBottom: 16,
  },
});
