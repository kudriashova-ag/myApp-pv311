import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AuthLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="login" options={{ title: "Login" }} />
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default AuthLayout;
