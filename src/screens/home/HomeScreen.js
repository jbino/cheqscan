import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Card, Header, SimplePaginationDot } from '../../components/';

const HomeScreen = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Header />

            <Text style={styles.txtBienvenido}>¡Hola Hector!</Text>

            <View style={{ alignItems: 'center' }}>
                <Carousel
                    data={Array(3).fill(0)}
                    renderItem={() => <Card />}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    sliderWidth={400}
                    itemWidth={310}
                />
            </View>
            <SimplePaginationDot activeSlide={activeSlide} entries={Array(3).fill(0)} />

            

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
    }
});