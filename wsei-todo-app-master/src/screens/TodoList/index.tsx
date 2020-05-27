import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";
import Header from '../../components/Header';

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center"
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "#40798c",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  headerTasks: {
    fontSize: 20,
    marginBottom: 20,
    color: "#0b2027",
    fontWeight: "bold"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10
  },
  addButton: {
    alignItems: "flex-end"
  },
  task: {
    width: 200
  },
  error: {
    color: "red"
  }
});

interface IToDo {
  text: string;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim())
      setToDos([...toDoList, { text: value}]);
    else showError(true);
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
    <Header title="TodoApp" />
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter a new task"
          value={value}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          style={styles.inputBox}
        />
        <Button title="Add Task" onPress={handleSubmit} color="#40798c" />
      </View>
      {error && (
        <Text style={styles.error}>You have to enter something</Text>
      )}
      <Text style={styles.headerTasks}>{"\n"}Your Tasks :</Text>
      {toDoList.length === 0 && <Text>There are no tasks.</Text>}
      {toDoList.map((toDo: IToDo, index: number) => (
        <View style={styles.listItem} key={`${index}_${toDo.text}`}>
          <Text
          >
            {toDo.text}
          </Text>
          <Button
            title="X"
            onPress={() => {
              removeItem(index);
            }}
            color="#9fc3b4"
          />
        </View>
      ))}
    </View>
    </ScrollView>
  );
}
