//rnfc
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ListItem = ({ item }) => {
    return (
        <View style={styles.main}>
            <Text>{item.title}</Text>
            <Button title="Видалити" />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
})

export default ListItem;
