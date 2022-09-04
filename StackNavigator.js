
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import SearchScreen from './src/screens/SearchScreen';
import ShowRestaurantScreen from './src/screens/ShowRestaurantScreen';

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="RestaurantPage" component={ShowRestaurantScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator