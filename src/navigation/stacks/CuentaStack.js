import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeader from '../../components/CustomHeader';

// Icons
import {  UserCircle } from '../../assets/images/icons';

// Screens
import CuentaScreen from '../../screens/cuenta/CuentaScreen';
import AgregarCuentaScreen from '../../screens/cuenta/AgregarCuentaScreen';
import CuentaAgregadaScreen from '../../screens/cuenta/CuentaAgregadaScreen';

const Stack = createStackNavigator();

const CuentaStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: '#E5E5E5'
            },
            header: ({ scene, previous, navigation }) => <CustomHeader scene={scene} previous={previous} navigation={navigation} />
        }}>
            <Stack.Screen options={{ title: 'Mi cuenta', headerLeft: () => <UserCircle color='#006DAA' /> }} name="CuentaScreen" component={CuentaScreen} />
            <Stack.Screen options={{ title: 'Agregar cuenta' }} name="AgregarCuentaScreen" component={AgregarCuentaScreen} />
            <Stack.Screen options={{ headerShown: false }} name="CuentaAgregadaScreen" component={CuentaAgregadaScreen} />
        </Stack.Navigator>
    );

}

export default CuentaStack;