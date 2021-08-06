import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Finance, Home, Success, Share } from '../../assets/images/icons';
import { BoxContainer, Button, Card, Container, Header } from '../../components';

const DepositoHechoScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <Header />

                <Card style={{ alignItems: 'center', marginBottom: 26 }}>
                    <Success />
                    <Text style={styles.txtTitle}>¡Depósito exitoso!</Text>

                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Cuenta de depósito</Text>
                        <Text style={styles.txtDark}>123456789</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Banco de depósito</Text>
                        <Text style={styles.txtDark}>Pichincha</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>N°  de cheque</Text>
                        <Text style={styles.txtDark}>123456789</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Documento</Text>
                        <Text style={styles.txtDark}>123456789</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Monto</Text>
                        <Text style={styles.txtDark}>$ 150.00</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Fecha</Text>
                        <Text style={styles.txtDark}>06/16/2021</Text>
                    </Container>
                    <View style={styles.divider} />

                    <Container row justifyContent='space-between' style={{ width: '100%' }}>
                        <Text style={styles.txtBlue}>Estado</Text>
                        <Text style={styles.txtSuccess}>APROBADA</Text>
                    </Container>
                </Card>

                <Button
                    text='Realizar otro depósito'
                    onPress={() => navigation.popToTop()}
                />

                <Container row justifyContent='space-between' style={{ marginVertical: 26 }}>
                    <BoxContainer
                        icon={<Share />}
                        text='Compartir comprobante'
                    />
                    <BoxContainer
                        icon={<Finance color='#006DAA' width={32} height={32} />}
                        text='Ver historial de depósitos'
                        onPress={() => navigation.navigate('HistorialStack')}
                    />
                    <BoxContainer
                        icon={<Home color='#006DAA' width={32} height={32} />}
                        text='Ir al inicio'
                        onPress={() => navigation.navigate('HomeStack')}
                    />
                </Container>

            </Container>
        </ScrollView>
    );
}

export default DepositoHechoScreen;

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0',
        width: '100%',
        marginBottom: 16,
        marginTop: 6
    },
    txtBlue: {
        color: '#00A7CF',
        fontSize: 16,
        fontFamily: 'Barlow-Medium'
    },
    txtDark: {
        color: '#585A5C',
        fontSize: 16,
        fontFamily: 'Barlow-Medium'
    },
    txtSuccess: {
        color: '#47EA9C',
        fontSize: 16,
        fontFamily: 'Barlow-Medium'
    },
    txtTitle: {
        color: '#585A5C',
        fontFamily: 'Raleway-Bold',
        marginVertical: 20,
        fontSize: 16
    }
});