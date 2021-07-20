import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/images/icons/Logo';
import { Button, FormContainer, Input } from '../components/';

const LoginScreen = () => {

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/images/SpVHcbuKi6E.jpg')}
                    style={styles.imgBanner}
                />
                <Logo style={{ position: 'absolute' }} width='200' heigth='200' />
            </View>
            <FormContainer>
                <Text style={styles.title}>Iniciar Sesión</Text>

                <View style={{ marginBottom: 40, width: '100%' }}>
                    <Input
                        text='Usuario'
                    />
                </View>
                <View style={{ marginBottom: 20, width: '100%' }}>
                    <Input
                        text='Contraseña'
                        isPassword
                    />
                </View>

                <Text style={styles.txtRecoverPwd}>Recuperar usuario o contraseña</Text>

                <Button
                    backgroundColor='#C0C5CA'
                    text='Iniciar Sesión'
                />
            </FormContainer>
        </>
    );

}

const styles = StyleSheet.create({
    imgBanner: {
        width: '100%',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
    },
    title: {
        color: '#006DAA',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 46,
        fontFamily: 'Raleway-Bold'
    },
    txtRecoverPwd: {
        textDecorationLine: 'underline',
        color: '#585A5C'
    }
});

export default LoginScreen;