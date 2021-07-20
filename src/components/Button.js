import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ backgroundColor, text, ...rest }) => {
    
    return (
        <TouchableOpacity
            style={[styles.btn, { backgroundColor }]}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.btnText}>
                {text}
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 16
    },
    btnText: {
        fontFamily: 'Barlow-Regular',
        fontSize: 20,
        color: '#fff'
    }
});

export default Button;