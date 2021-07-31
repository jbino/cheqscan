import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import DepositarScreen from '../../screens/depositar/DepositarScreen';

const Stack = createStackNavigator();

const DepositarStack = () => {

    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#E5E5E5'
            }
        }}>
            <Stack.Screen name="DepositarScreen" component={DepositarScreen} />
        </Stack.Navigator>

    );

}

export default DepositarStack;