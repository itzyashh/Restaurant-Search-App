import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})