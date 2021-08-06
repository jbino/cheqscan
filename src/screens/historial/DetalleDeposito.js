import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Container } from '../../components/';

const DetalleDeposito = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <Card>
                <Text>Depósito 001</Text>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Fecha de depósito</Text>
                    <Text style={styles.label}>05/18/2021</Text>
                </Container>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Cheque No.</Text>
                    <Text style={styles.label}>123456789</Text>
                </Container>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Banco</Text>
                    <Text style={styles.label}>Banco Pichincha</Text>
                </Container>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Cuenta</Text>
                    <Text style={styles.label}>123456789</Text>
                </Container>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Monto</Text>
                    <Text style={styles.labelBold}>$150.00</Text>
                </Container>

                <View style={styles.divider} />

                <Container
                    row
                    justifyContent='space-between'
                >
                    <Text style={styles.label}>Estado</Text>
                    <Text style={styles.labelAprobado}>APROBADA</Text>
                </Container>

                <View style={styles.divider} />

            </Card>
        </Container>
    );
}

export default DetalleDeposito;

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: '#E8EDF0',
        borderBottomWidth: 1,
        marginVertical: 12
    },
    label: {
        fontFamily: 'Barlow-Regular',
        fontSize: 16,
        color: '#585A5C'
    },
    labelBold: {
        fontFamily: 'Barlow-Medium',
        fontSize: 16,
        color: '#585A5C'
    },
    labelAprobado: {
        fontFamily: 'Barlow-Medium',
        fontSize: 16,
        color: '#47EA9C'
    }
})