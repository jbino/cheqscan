import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20
    }
});