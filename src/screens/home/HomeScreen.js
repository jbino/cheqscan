import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Card, CuentaCard, Header, RenderDepositos, SimplePaginationDot } from '../../components/';

const HomeScreen = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <ScrollView>
            <Header />

            <Text style={styles.txtBienvenido}>¡Hola Hector!</Text>

            <View style={{ alignItems: 'center' }}>
                <Carousel
                    data={Array(3).fill(0)}
                    renderItem={() => <CuentaCard />}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    sliderWidth={400}
                    itemWidth={310}
                />
            </View>
            <SimplePaginationDot activeSlide={activeSlide} entries={Array(3).fill(0)} />

            <Card style={{ flex: 1 }}>
                <Text style={styles.txtTitleDeposito}>Últimos depósitos</Text>
                <RenderDepositos depositos={Array(7).fill(0)} />
            </Card>

        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    txtBienvenido: {
        color: '#006DAA',
        fontFamily: 'Raleway-Medium',
        fontSize: 24,
        marginHorizontal: 22,
        marginBottom: 16,
        fontWeight: '500'
    },
    txtTitleDeposito: {
        color: '#585A5C',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0',
        paddingBottom: 8,
        marginBottom: 10,
        fontFamily: 'Raleway-Regular'
    }
});