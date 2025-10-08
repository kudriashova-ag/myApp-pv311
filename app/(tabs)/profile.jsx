import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import globalStyles from '../../constants/global';

const Profile = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
