import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './';

const RenderHistorial = ({ depositos }) => {

    const {navigate} = useNavigation();

    return (
        depositos.map(deposito => (
            <TouchableOpacity
                key={deposito.id}
                onPress={()=> navigate('DetalleDeposito')}
                activeOpacity={0.5}
            >
                <Container row justifyContent='space-between' style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.txtNumero}>{deposito.numero}</Text>
                    </View>

                    <View style={{ flex: 5 }}>
                        <Container row justifyContent='space-between'>
                            <Text style={styles.txtCheque}>{deposito.cheque}</Text>
                            <Text style={styles.txtTotal}>${deposito.total}</Text>
                        </Container>

                        <Container row justifyContent='space-between'>
                            <Text style={styles.txtFecha}>{deposito.fecha}</Text>
                            <Text style={styles.txtAprobado}>{deposito.aprobado && 'APROBADA'}</Text>
                        </Container>
                    </View>
                </Container>
            </TouchableOpacity>
        ))
    );
}

export default RenderHistorial;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0'
    },
    txtNumero: {
        color: '#969A9E',
        fontFamily: 'Barlow-Regular'
    },
    txtCheque: {
        color: '#585A5C',
        fontFamily: 'Barlow-Regular',
        fontSize: 16,
        marginBottom: 8
    },
    txtTotal: {
        fontFamily: 'Barlow-Regular',
        color: '#585A5C',
        fontSize: 16,
        fontWeight: '700'
    },
    txtFecha: {
        fontFamily: 'Barlow-Regular',
        color: '#C0C5C9',
        fontSize: 16,
        fontWeight: '600'
    },
    txtAprobado: {
        fontFamily: 'Barlow-Bold',
        color: '#47EA9C',
        fontSize: 16,
    }
});