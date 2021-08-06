import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Container, Header, Input, SelectInput } from '../../components';

const VerificarDeposito = ({ navigation, route }) => {
    return (
        <ScrollView>
            <Container>
                <Header />

                <Text style={styles.txtTitle}>Verifica tu depósito</Text>

                <Card>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.txtSubTitle}>Cuenta destino</Text>
                        <SelectInput
                            label='Banco / Cuenta destino'
                        />
                    </View>

                    <Text style={styles.txtSubTitle}>Datos del cheque</Text>

                    <View style={{ marginBottom: 10 }}>
                        <Input text='Banco del cheque' />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Input text='Cuenta' />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Input text='Número de cheque' />
                    </View>

                    <View style={{ marginBottom: 40 }}>
                        <Input text='Monto' />
                    </View>

                    <Text style={styles.txtSubTitle}>Datos adicionales</Text>

                    <Container row>
                        <View style={{ flex: 1 }}>
                            <Input text='Agencia' />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Input text='Cliente' />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Input text='PIN' />
                        </View>
                    </Container>

                    <Image
                        source={{ uri: route.params.photo }}
                        style={{ marginTop: 20, width: '100%', height: 180 }}
                    />
                </Card>

                <View style={{ marginVertical: 22 }}>
                    <Button text='Depositar' onPress={() => navigation.navigate('DepositoHechoScreen')} />
                </View>

                <Button text='Tomar fotos de nuevo' btnStyle='outline' onPress={() => navigation.goBack()} />

                <Text style={styles.txtCancelar}>Cancelar depósito</Text>
            </Container>
        </ScrollView>
    );
}

export default VerificarDeposito;

const styles = StyleSheet.create({
    txtTitle: {
        fontFamily: 'Raleway-Medium',
        textAlign: 'center',
        fontSize: 20,
        color: '#006DAA',
        marginBottom: 20
    },
    txtSubTitle: {
        color: '#006DAA',
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
        marginBottom: 12
    },
    txtCancelar: {
        color: '#FC374B',
        textAlign: 'center',
        marginVertical: 22,
        fontFamily: 'Barlow-Bold',
        fontSize: 16,
    }
});