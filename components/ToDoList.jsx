// rnfc
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./Header";
import Form from "./Form";
import ListItem from "./ListItem";

const list = [
  {
    title: "Work",
    id: 1,
  },
  {
    title: "Sport",
    id: 2,
  },
  {
    title: "Shopping",
    id: 3,
  },
];

const ToDoList = () => {
    const [tasks, setTasks] = useState(list);
    
    const addTask = (title) => { 
        setTasks([...tasks, {title, id: Date.now()}])
    }
    
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Form addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ToDoList;
