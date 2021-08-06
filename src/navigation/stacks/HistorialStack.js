import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// Screens
import HistorialScreen from '../../screens/historial/HistorialScreen';
import CustomHeader from '../../components/CustomHeader';
import FiltroScreen from '../../screens/historial/FiltroScreen';

// Icons
import { Finance } from '../../assets/images/icons';
import DetalleDeposito from '../../screens/historial/DetalleDeposito';

const Stack = createStackNavigator();

const HistorialStack = ({ navigation, route }) => {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HistorialScreen';

    useEffect(() => {
        navigation.setOptions({
            tabBarVisible: ['HistorialScreen', 'DetalleDeposito'].includes(routeName),
        });
    }, [navigation, routeName]);

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: '#E5E5E5'
            },
            header: ({ scene, previous, navigation }) => <CustomHeader scene={scene} previous={previous} navigation={navigation} />
        }}>
            <Stack.Screen options={{ title: 'Historial', headerLeft: () => <Finance /> }} name="HistorialScreen" component={HistorialScreen} />
            <Stack.Screen options={{ title: 'Detalle de depósito' }} name="DetalleDeposito" component={DetalleDeposito} />
            <Stack.Screen options={{ title: 'Mejora tu búsqueda' }} name="FiltroScreen" component={FiltroScreen} />
        </Stack.Navigator>
    );

}

export default HistorialStack;