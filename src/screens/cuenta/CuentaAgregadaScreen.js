import React from 'react';
import { Text, View } from 'react-native';
import { Home, PlusCircle, Success, UserCircle } from '../../assets/images/icons';
import { BoxContainer, Button, Card, Container, Header } from '../../components';

const CuentaAgregadaScreen = ({ navigation }) => {
    return (
        <Container>
            <Header />
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Card style={{ alignItems: 'center', justifyContent: 'space-between', height: 270, paddingVertical: 40, marginBottom: 30 }}>
                    <Success />
                    <Text>Has agregado tu cuenta</Text>

                    <View style={{ width: '70%' }}>
                        <Button
                            text='Realizar depósito'
                            onPress={() => navigation.navigate('DepositarStack')}
                        />
                    </View>
                </Card>

                <Container row justifyContent='space-between'>
                    <BoxContainer
                        icon={<PlusCircle color='#006DAA' />}
                        text='Agregar otra cuenta'
                        size={104}
                        bgColor='#fff'
                        onPress={() => navigation.goBack()}
                    />
                    <BoxContainer
                        icon={<UserCircle color='#006DAA' />}
                        text='Ir a mi cuenta'
                        size={104}
                        bgColor='#fff'
                        onPress={() => navigation.navigate('CuentaScreen')}
                    />
                    <BoxContainer
                        icon={<Home color='#006DAA' />}
                        text='Ir al inicio'
                        size={104}
                        bgColor='#fff'
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                </Container>
            </View>
        </Container>
    );
}

export default CuentaAgregadaScreen;