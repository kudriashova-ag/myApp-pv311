import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Link href="/">Home Page</Link>
        </View>
    );
}

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

export default About;
