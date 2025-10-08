import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import globalStyles from "../constants/global";
import Spacer from "../components/Spacer";

const Index = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
      <Spacer />
      <Link href="/about" style={globalStyles.link}>
        About Page
      </Link>
      <Link href="/ToDoList" style={globalStyles.link}>
        ToDo
      </Link>
      <Link href="/login" style={globalStyles.link}>
        Login
      </Link>
      <Link href="/home" style={globalStyles.link}>
        Home tabs
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
