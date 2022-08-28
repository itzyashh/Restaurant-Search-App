
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import SearchScreen from './src/screens/SearchScreen';

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator