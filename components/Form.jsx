import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Form = ({addTask}) => {
  const [text, setText] = useState('');
  const [textError, setTextError] = useState(false);
  const changeHandler = (value) => { 
    setText(value);
  }

  const addHandler = () => { 
    if (text.trim().length === 0) {
      setTextError(true);
      return;
    }
    addTask(text);
    setText('');
    setTextError(false);
  }

  return (
    <View style={styles.main}>
      <TextInput style={styles.input} value={text} onChangeText={changeHandler} />
      {textError && <Text style={{color: 'red'}}>Обов'язкове поле</Text>}
      <Button title="Додати" onPress={addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
    height: 50,
    backgroundColor: "#fff",
  },
  main: {
    backgroundColor: "#eee",
    padding: 30,
    width: "70%",
    marginHorizontal: "auto",
    borderRadius: 10,
  },
});

export default Form;
