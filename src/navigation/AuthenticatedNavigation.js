import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks
import HomeStack from './stacks/HomeStack';
import DepositarStack from './stacks/DepositarStack';

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ tabBarLabel: 'Inicio' }}
                />

                <Tab.Screen
                    name="DepositarStack"
                    component={DepositarStack}
                    options={{ tabBarLabel: 'Depositar' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

export default AuthenticatedNavigation;