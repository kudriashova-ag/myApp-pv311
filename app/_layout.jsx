import { Slot, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            title: "About Us",
            headerRight: () => (
              <Button title="Info" onPress={() => alert("Information")} />
            ),
          }}
        />
        <Stack.Screen name="ToDoList" options={{ title: "ToDo List" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
