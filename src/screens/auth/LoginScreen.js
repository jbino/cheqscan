import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PasswordHidden, Scan, User } from '../../assets/images/icons';
import { BannerAuth, Button, FormContainer, Input } from '../../components';

const LoginScreen = ({ navigation }) => {

    return (
        <>
            <BannerAuth />

            <FormContainer>
                <Text style={styles.title}>Iniciar Sesión</Text>

                <View style={{ marginBottom: 40, width: '100%' }}>
                    <Input
                        text='Usuario'
                        icon={<User />}
                    />
                </View>
                <View style={{ marginBottom: 20, width: '100%' }}>
                    <Input
                        text='Contraseña'
                        isPassword
                        icon={<PasswordHidden />}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('RecoverScreen')}
                >
                    <Text style={styles.txtRecoverPwd}>Recuperar usuario o contraseña</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', marginVertical: 34 }}>
                    <Scan width='30' heigth='30' />
                    <Text style={styles.txtIngresar}>Ingresar con huella / facial</Text>
                </View>

                <View style={{ paddingHorizontal: 22 }}>
                    <Button
                        backgroundColor='#C0C5CA'
                        text='Iniciar Sesión'
                    />
                    <Text style={styles.txtAfiliarme}>Afiliarme</Text>
                </View>
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
        marginVertical: 36,
        fontFamily: 'Raleway-Bold'
    },
    txtRecoverPwd: {
        fontFamily: 'Barlow-Regular',
        textDecorationLine: 'underline',
        color: '#585A5C'
    },
    txtAfiliarme: {
        fontFamily: 'Barlow-Regular',
        textDecorationLine: 'underline',
        color: '#585A5C',
        textAlign: 'center',
        marginTop: 20
    },
    txtIngresar: {
        fontFamily: 'Barlow-Regular',
        color: '#585A5C',
        marginTop: 10
    }
});

export default LoginScreen;