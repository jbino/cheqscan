import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks
import HomeStack from './stacks/HomeStack';
import DepositarStack from './stacks/DepositarStack';
import HistorialStack from './stacks/HistorialStack';
import CuentaStack from './stacks/CuentaStack';

// Íconos
import { Finance, Home, Money, UserCircle } from '../assets/images/icons';

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontFamily: 'Barlow-Regular', fontSize: 12 },
                    activeTintColor: '#04C2F0',
                    inactiveTintColor: '#585A5C',
                    style: {
                        height: 68,
                        paddingBottom: 12,
                    }
                }}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ tabBarLabel: 'Inicio', tabBarIcon: ({ focused }) => focused ? <Home color='#04C2F0' /> : <Home /> }}
                />

                <Tab.Screen
                    name="DepositarStack"
                    component={DepositarStack}
                    options={{ tabBarLabel: 'Depositar', tabBarIcon: ({ focused }) => focused ? <Money color='#04C2F0' /> : <Money /> }}
                />

                <Tab.Screen
                    name="HistorialStack"
                    component={HistorialStack}
                    options={{ tabBarLabel: 'Historial', tabBarIcon: ({ focused }) => focused ? <Finance color='#04C2F0' /> : <Finance /> }}
                />

                <Tab.Screen
                    name="CuentaStack"
                    component={CuentaStack}
                    options={{ tabBarLabel: 'Mi cuenta', tabBarIcon: ({ focused }) => focused ? <UserCircle color='#04C2F0' /> : <UserCircle /> }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

export default AuthenticatedNavigation;