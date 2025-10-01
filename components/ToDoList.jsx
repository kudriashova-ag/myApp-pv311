// rnfc
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./Header";
import Form from "./Form";
import ListItem from "./ListItem";

const list = [
  {
    title: "Work",
    done: true,
    id: 1,
  },
  {
    title: "Sport",
    done: false,
    id: 2,
  },
  {
    title: "Shopping",
    done: false,
    id: 3,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: Date.now() }]);
  };

  const toggleDone = (id) => {
    const editedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTasks(editedTasks);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Form addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem item={item} toggleDone={toggleDone} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ToDoList;
