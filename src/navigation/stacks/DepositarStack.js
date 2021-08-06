import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import DepositarScreen from '../../screens/depositar/DepositarScreen';
import ChequeScreen from '../../screens/depositar/ChequeScreen';
import CustomHeader from '../../components/CustomHeader';
import TakePhotoScreen from '../../screens/depositar/TakePhotoScreen';
import VerificarDeposito from '../../screens/depositar/VerificarDeposito';
import DepositoHechoScreen from '../../screens/depositar/DepositoHechoScreen';

const Stack = createStackNavigator();

const DepositarStack = () => {

    return (

        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: '#E5E5E5'
            },
            header: ({ scene, previous, navigation }) => <CustomHeader scene={scene} previous={previous} navigation={navigation} />
        }}>
            <Stack.Screen options={{ title: 'Depositar' }} name="DepositarScreen" component={DepositarScreen} />
            <Stack.Screen options={{ headerShown: false }} name="ChequeScreen" component={ChequeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="TakePhotoScreen" component={TakePhotoScreen} />
            <Stack.Screen options={{ headerShown: false }} name="VerificarDeposito" component={VerificarDeposito} />
            <Stack.Screen options={{ headerShown: false }} name="DepositoHechoScreen" component={DepositoHechoScreen} />
        </Stack.Navigator>

    );

}

export default DepositarStack;