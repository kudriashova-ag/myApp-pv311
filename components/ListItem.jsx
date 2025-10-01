//rnfc
import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const ListItem = ({ item, toggleDone }) => {
  return (
    <View style={styles.main}>
      <Switch value={item.done} onValueChange={() => toggleDone(item.id)} />
      <Text style={{ textDecorationLine: item.done ? "line-through" : "none" }}>
        {item.title}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : styles.buttonNormal,
        ]}
      ><Text>Видалити</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "tomato",
  },
  buttonNormal: {
    backgroundColor: "#eee",
  },
  buttonPressed: {
    backgroundColor: "tomato",
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});

export default ListItem;
