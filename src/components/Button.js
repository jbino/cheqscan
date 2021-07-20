import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ btnStyle, backgroundColor = '#04C2F0', text, showLoadingIndicator, ...rest }) => {

    return (
        <TouchableOpacity
            style={btnStyle === 'outline' ? [styles.btnOutline] : [styles.btn, { backgroundColor }]}
            activeOpacity={0.7}
            {...rest}
        >
            {!showLoadingIndicator &&
                <Text style={btnStyle === 'outline' ? styles.btnTextOutline : styles.btnText}>
                    {text}
                </Text>
            }
            {showLoadingIndicator && <ActivityIndicator size={26} color='#fff' />}
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
    },
    btnTextOutline: {
        fontFamily: 'Barlow-Regular',
        fontSize: 20,
        color: '#006DAA'
    },
    btnOutline: {
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 16,
        borderColor: '#006DAA',
        borderWidth: 2
    }
});

export default Button;