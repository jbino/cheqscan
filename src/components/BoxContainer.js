import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BoxContainer = ({ size = 116, bgColor = '#F7F7F7', text, icon, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{ backgroundColor: bgColor, borderRadius: 8, width: size, height: size, }}
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
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Barlow-Regular',
        lineHeight: 16,
        fontSize: 12,
        marginTop: 'auto'
    }
});

export default BoxContainer;