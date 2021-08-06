import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert, Money } from '../../assets/images/icons';
import { Button, Card, Container, Header, SelectInput } from '../../components/';

const DepositarScreen = ({ navigation }) => {
    return (
        <Container>
            <Card style={{ marginTop: 20 }}>
                <Text style={styles.txtSelecciona}>Selecciona cuenta</Text>
                <SelectInput
                    label='Banco / Cuenta'
                />
            </Card>

            <View style={styles.footer}>
                <Alert />
                <Text style={styles.txtInfo}>Puedes tomar una foto del cheque o cargar una foto desde tu dispositivo</Text>
                <View style={{ width: '100%' }}>
                    <Button
                        onPress={() => navigation.navigate('ChequeScreen')}
                        text='Tomar foto'
                    />
                </View>
            </View>
        </Container>
    );
}

export default DepositarScreen;

const styles = StyleSheet.create({
    txtTitle: {
        fontFamily: 'Raleway-Medium',
        color: '#006DAA',
        marginLeft: 10,
        fontSize: 20
    },
    txtInfo: {
        fontFamily: 'Barlow-Regular',
        textAlign: 'center',
        marginTop: 12,
        width: '80%',
        marginBottom: 26,
        lineHeight: 24,
        fontSize: 16,
        color: '#585A5C'
    },
    txtSelecciona: {
        color: '#006DAA',
        fontFamily: 'Raleway-Medium',
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});