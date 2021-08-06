import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Pencil } from '../assets/images/icons';
import Button from './Button';

const CuentaCard = () => {

    const { navigate } = useNavigation();

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.txtMiCuenta}>Mi cuenta</Text>
                <Pencil />
            </View>

            <View style={styles.separator} />

            <View style={[styles.cardHeader, { marginBottom: 10 }]}>
                <Text style={styles.txtCuentaAhorro}>Cuenta de ahorro</Text>
                <Text style={styles.txtBanco}>Banco Pichincha</Text>
            </View>

            <View style={styles.cardHeader}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.TxtNoCuenta}>1234567890</Text>
                </View>

                <View style={{ flex: 1.3 }}>
                    <Button text='Depositar' onPress={() => navigate('DepositarStack')} />
                </View>
            </View>
        </View>
    );
}

export default CuentaCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtMiCuenta: {
        fontFamily: 'Raleway-Medium',
        color: '#585A5C',
        fontSize: 16
    },
    txtCuentaAhorro: {
        color: '#C0C5C9',
        fontFamily: 'Barlow-Medium',
        fontSize: 15
    },
    txtBanco: {
        color: '#006DAA',
        fontFamily: 'Barlow-Medium',
        fontSize: 15,
        fontWeight: '600'
    },
    TxtNoCuenta: {
        color: '#3A3F45',
        fontSize: 24,
        fontFamily: 'Barlow-Medium',
        fontWeight: '600',
    },
    separator: {
        borderBottomColor: '#E8EDF0',
        borderBottomWidth: 1,
        marginTop: 8,
        marginBottom: 12
    }
});