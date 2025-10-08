import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../../constants/global';
import { Link } from 'expo-router';

const Books = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Books</Text>
            <Link href="/books/details" style={globalStyles.link}>
                Book Details
            </Link>
                
        </View>
    );
}

const styles = StyleSheet.create({})

export default Books;
