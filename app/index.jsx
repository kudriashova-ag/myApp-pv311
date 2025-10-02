import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
          <Link href="/about">About Page</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
});

export default Index;
