import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, Search, Vector } from '../../assets/images/icons';
import { Card, Container, Input, RenderHistorial } from '../../components/';

const HistorialScreen = ({ navigation }) => {

    const ultimosDepositos = [
        {
            id: 1,
            cheque: 'Cheque 12345678',
            aprobado: true,
            fecha: '05/18/2021',
            numero: '001',
            total: 150
        },
        {
            id: 2,
            cheque: 'Cheque 12345678',
            aprobado: true,
            fecha: '05/18/2021',
            numero: '001',
            total: 150
        },
        {
            id: 3,
            cheque: 'Cheque 12345678',
            aprobado: true,
            fecha: '05/18/2021',
            numero: '001',
            total: 150
        }
    ];

    return (
        <ScrollView>
            <Container style={{ marginTop: 20 }}>
                <Container row justifyContent='space-between'>
                    <View style={{ width: '70%' }}>
                        <Input
                            icon={<Search />}
                            placeholder='Busca aquí'
                            bgColor='#fff'
                        />
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('FiltroScreen')} style={styles.btnContainer}>
                            <Vector />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Calendar />
                        </TouchableOpacity>
                    </View>
                </Container>

                <Card style={{ marginTop: 20 }}>
                    <Text>Últimos depósitos</Text>
                    <RenderHistorial depositos={ultimosDepositos} />
                </Card>

            </Container>
        </ScrollView>
    );

}

export default HistorialScreen;

const styles = StyleSheet.create({
    btnContainer: {
        width: 40, height: 40, borderRadius: 6, paddingVertical: 10, backgroundColor: '#fff', alignItems: 'center'
    }
});