//rnfc
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Список справ</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  main: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: "dodgerblue",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
});

export default Header;