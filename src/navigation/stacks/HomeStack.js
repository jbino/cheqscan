import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../../screens/home/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {

    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#E5E5E5'
            }
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>

    );

}

export default HomeStack;