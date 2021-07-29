import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BoxContainer = ({ text, icon, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
        >
            <View style={styles.box}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#F7F7F7',
        width: 116,
        height: 116,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        padding: 20
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Barlow-Regular'
    }
});

export default BoxContainer;