import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({ isPassword, style, text }) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, style]}>{text}</Text>
            <TextInput
                style={styles.TextInput}
                secureTextEntry={isPassword}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        fontFamily: 'Barlow-Medium',
        fontSize: 14,
        color: '#969A9E'
    },
    TextInput: { 
        borderBottomColor: '#C0C5C9',
        borderBottomWidth: 1,
        height: 44,
        fontSize: 16,
        color: '#585A5C'
    }
});

export default Input;