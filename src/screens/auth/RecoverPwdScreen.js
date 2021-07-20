import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAuth, Button, FormContainer, Input } from '../../components';
import { Email, UserCircle } from '../../assets/images/icons';

const RecoverPwdScreen = ({ navigation }) => {

    const [sendUser, setSendUser] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendCode = () => {
        setLoading(true);

        setTimeout(() => {
            navigation.navigate('RecoverPwdCodeScreen');
            setLoading(false);
        }, 2000);
    }

    return (
        <>
            <BannerAuth />

            <FormContainer style={{ height: 'auto' }}>
                <Text style={styles.txtTitle}>Recupera tu contraseña</Text>
                <Text style={styles.txtDescription}>
                    Ingresa el nombre de usuario y correo electrónico para recuperar tu contraseña.
                </Text>

                <View style={styles.inputContainer}>
                    <Input
                        text='Correo electrónico'
                        icon={<Email />}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Input
                        text='Nombre de usuario'
                        icon={<UserCircle />}
                    />
                </View>

                <View style={styles.btnContainer}>
                    <Button
                        text='Enviar'
                        onPress={sendCode}
                        showLoadingIndicator={loading}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.txtBack}>Regresar</Text>
                </TouchableOpacity>
            </FormContainer>
        </>
    );

}

const styles = StyleSheet.create({
    txtTitle: {
        textAlign: 'center',
        color: '#006DAA',
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        marginTop: 26
    },
    txtBack: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium',
        marginBottom: 40
    },
    btnContainer: {
        marginBottom: 40,
        paddingHorizontal: 40,
        width: '100%'
    },
    txtDescription: {
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium',
        lineHeight: 20,
        marginVertical: 36
    },
    inputContainer: {
        marginBottom: 36
    }
});

export default RecoverPwdScreen;