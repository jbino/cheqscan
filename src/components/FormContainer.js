import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FormContainer = ({ children }) => {

    return (
        <View style={styles.formContainer}>
            {children}
        </View>
    );

}

const styles = StyleSheet.create({
    formContainer: {
        position: 'absolute',
        left: 17,
        top: 166,
        height: '74%',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingHorizontal: 36,
    },
});

export default FormContainer;