import React from 'react';
import { Text, View } from 'react-native';

const RenderDepositos = ({ depositos }) => {
    return (
        depositos.map((deposito, index) => (
            <View key={index} style={{ paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#E8EDF0' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                    <Text style={{ color: '#C0C5C9', fontSize: 14, fontFamily: 'Barlow-Regular' }}>Cuenta:</Text>
                    <Text style={{ color: '#C0C5C9', fontSize: 14, fontFamily: 'Barlow-Regular' }}>06/16/2021</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#585A5C', fontSize: 16, fontFamily: 'Barlow-Regular' }}>123456789</Text>
                    <Text style={{ color: '#585A5C', fontSize: 16, fontFamily: 'Barlow-Regular' }}>$1,500.00</Text>
                </View>
            </View>
        ))
    );
}

export default RenderDepositos;
