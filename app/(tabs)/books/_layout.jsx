import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const BooksLayout = () => {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: "Books" }} />
        <Stack.Screen name="details" options={{ title: "Book Details" }} />
        <Stack.Screen name="add" options={{ title: "Create Book" }} />
      </Stack>
    );
}

const styles = StyleSheet.create({})

export default BooksLayout;
