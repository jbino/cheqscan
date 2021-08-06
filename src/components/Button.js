import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ btnStyle, backgroundColor = '#04C2F0', text, leftIcon, showLoadingIndicator, ...rest }) => {

    return (
        <TouchableOpacity
            style={btnStyle === 'outline' ? [styles.btnOutline] : [styles.btn, { backgroundColor }]}
            activeOpacity={0.7}
            {...rest}
        >
            {!showLoadingIndicator &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
                    <Text style={btnStyle === 'outline' ? styles.btnTextOutline : styles.btnText}>
                        {text}
                    </Text>
                </View>
            }
            {showLoadingIndicator && <ActivityIndicator size={26} color='#fff' />}
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 16,
        width: 'auto'
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
        paddingVertical: 8,
        borderRadius: 16,
        borderColor: '#006DAA',
        borderWidth: 2,
        width: 'auto'
    }
});

export default Button;