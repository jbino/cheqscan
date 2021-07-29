import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAuth, Button, FormContainer, Input } from '../../components';
import { Email, Success } from '../../assets/images/icons';

const RecoverUserScreen = ({ navigation }) => {

    const [sendUser, setSendUser] = useState(false);
    const [loading, setLoading] = useState(false);

    const RecoverForm = () => (
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <Text style={styles.txtTitle}>Recupera tu usuario</Text>
            <Text style={styles.txtDescription}>
                Ingresa el correo electrónico de tu cuenta para recuperar tu nombre de usuario
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    text='Correo electrónico'
                    icon={<Email />}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button
                    text='Enviar'
                    showLoadingIndicator={loading}
                    onPress={sendUserEmail}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.txtBack}>Regresar</Text>
            </TouchableOpacity>
        </View>
    );

    const SuccessRecoverForm = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Success />

            <Text style={styles.txtDescription}>
                Hemos enviado tu nombre de usuario al correo ingresado.
            </Text>

            <View style={[styles.btnContainer, { marginTop: 20 }]}>
                <Button
                    text='Volver al inicio'
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </View>
    );

    const sendUserEmail = () => {
        // Simular tiempo de respuesta del servidor
        setLoading(true);

        setTimeout(() => {
            setSendUser(true);
        }, 2000);
    }

    return (
        <>
            <BannerAuth />

            <FormContainer style={{ height: '60%' }}>
                {!sendUser && <RecoverForm />}
                {sendUser && <SuccessRecoverForm />}
            </FormContainer>
        </>
    );

}

const styles = StyleSheet.create({
    txtTitle: {
        textAlign: 'center',
        color: '#006DAA',
        fontFamily: 'Raleway-Bold',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 26,
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
        marginBottom: 36
    },
    inputContainer: {
        marginBottom: 36
    }
});

export default RecoverUserScreen;