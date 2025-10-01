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
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        onPress={() => {}}
      >
        {({ pressed }) => (
            <FontAwesome name="trash" size={24} color={ pressed ? "white" : "black" } />
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 48,
    height: 48,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "tomato",
    alignItems: 'center'
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
