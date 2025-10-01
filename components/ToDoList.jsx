// rnfc
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./Header";
import Form from "./Form";
import ListItem from "./ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  useEffect(() => { 
    const loadData = async () => { 
      try { 
        const savedTasks = await AsyncStorage.getItem("tasks")
        if (savedTasks !== null) { 
          setTasks(JSON.parse(savedTasks))
        }
      }
      catch (e) { 
        console.log("Помилка при завантаженні: ", e);
        
      }
    }
    loadData();
  }, [])

  useEffect(() => { 
    const saveData = async () => { 
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
      }
      catch (e) { 
        console.log('Помилка при збереженні: ', e);
      }
    }
    saveData()
  }, [tasks])

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
