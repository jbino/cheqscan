import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAuth, Button, ConfirmationInput, FormContainer, Input } from '../../components';
import { Key, Success } from '../../assets/images/icons';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const RegisterUserCodeScreen = ({ navigation }) => {

    const [sendPassword, setSendPassword] = useState(false);
    const [valueCode, setValueCode] = useState('');
    const [loading, setLoading] = useState(false);

    const SuccessRecoverForm = () => (
        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Success style={{ marginBottom: 30 }} />

            <Text style={styles.txtSuccess}>
                Tu cuenta ha sido creada exitosamente.
            </Text>

            <View style={{ marginTop: 30, width: '70%' }}>
                <Button
                    text='Ingresar'
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </View>
    );

    const sendCode = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSendPassword(true);
        }, 2000);
    }

    return (
        <>
            <BannerAuth />

            <FormContainer style={sendPassword ? { height: '46%' } : { height: '76%', paddingHorizontal: 0 }}>
                {!sendPassword ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 30, flex: 1, justifyContent: 'space-between' }}
                    >
                        <Text style={styles.txtTitle}>Verifica tu identidad</Text>
                        <Text style={styles.txtDescription}>
                            Enviamos a tu celular un código temporal. Ingrésalo para verificar tu identidad.
                        </Text>

                        <View style={{ marginBottom: 30 }}>
                            <ConfirmationInput
                                value={valueCode}
                                setValue={setValueCode}
                                cellCount={6}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={{ textAlign: 'center', color: '#969A9E' }}>1:59 para verificar tu información</Text>
                        </View>

                        <View style={styles.btnContainer}>
                            <Button
                                text='Verificar'
                                onPress={sendCode}
                                showLoadingIndicator={loading}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.txtBack}>Regresar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                ) : (
                    <SuccessRecoverForm />
                )}
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
        paddingHorizontal: 20
    },
    txtDescription: {
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium',
        lineHeight: 20,
        marginVertical: 30
    },
    txtSuccess: {
        color: '#006DAA',
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        fontSize: 18
    },
    inputContainer: {
        marginBottom: 36
    }
});

export default RegisterUserCodeScreen;