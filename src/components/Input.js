import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PasswordShow } from '../assets/images/icons';

const Input = ({ bgColor = '#F7F7F7', icon, isPassword, style, text, onChangeText, placeholder, ...rest }) => {

    const [inputFocus, setInputFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(isPassword);

    const RenderPasswordIcon = () => {
        return (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? icon : <PasswordShow />}
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            {text && <Text style={[styles.text, style]}>{text}</Text>}
            <View style={styles.icon}>
                {!isPassword && icon}
                {isPassword && <RenderPasswordIcon />}
            </View>
            <TextInput
                style={[styles.TextInput, { backgroundColor: bgColor }, inputFocus && { borderWidth: 1, borderColor: '#04C2F0' }]}
                placeholder={placeholder}
                placeholderTextColor='#969A9E'
                secureTextEntry={showPassword}
                onBlur={() => setInputFocus(false)}
                onFocus={() => setInputFocus(true)}
                onChangeText={onChangeText}
                {...rest}
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
        color: '#969A9E',
        marginBottom: 10
    },
    TextInput: {
        fontSize: 16,
        color: '#585A5C',
        padding: 7,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        zIndex: 99
    }
});

export default Input;