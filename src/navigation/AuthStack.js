import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import RecoverScreen from '../screens/auth/RecoverScreen';
import RecoverUserScreen from '../screens/auth/RecoverUserScreen';
import RecoverPwdScreen from '../screens/auth/RecoverPwdScreen';
import RecoverPwdCodeScreen from '../screens/auth/RecoverPwdCodeScreen';
import RegisterUserDataScreen from '../screens/auth/RegisterUserDataScreen';
import RegisterUserCodeScreen from '../screens/auth/RegisterUserCodeScreen';

const Stack = createStackNavigator();

const AuthStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#E5E5E5'
                }
            }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="RecoverScreen" component={RecoverScreen} />
                <Stack.Screen name="RecoverUserScreen" component={RecoverUserScreen} />
                <Stack.Screen name="RegisterUserDataScreen" component={RegisterUserDataScreen} />
                <Stack.Screen name="RegisterUserCodeScreen" component={RegisterUserCodeScreen} />
                <Stack.Screen name="RecoverPwdScreen" component={RecoverPwdScreen} />
                <Stack.Screen name="RecoverPwdCodeScreen" component={RecoverPwdCodeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AuthStack;