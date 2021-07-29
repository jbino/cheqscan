import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAuth, Button, FormContainer, Input } from '../../components';

const RegisterScreen = ({ navigation }) => {

    return (
        <>
            <BannerAuth />

            <FormContainer style={{ paddingHorizontal: 0 }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 30 }}
                >
                    <Text style={styles.txtTitle}>Crea tu cuenta</Text>
                    <Text style={styles.txtSubTitle}>Información personal</Text>

                    <View style={styles.inputContainer}>
                        <Input text='Identificación' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Input text='Nombre' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Input text='Apellidos' />
                    </View>

                    <View style={styles.btnContainer}>
                        <Button
                            text='Siguiente'
                            btnStyle='outline'
                            onPress={() => navigation.navigate('RecoverPwdScreen')}
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.txtBack}>Regresar</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        marginTop: 26,
        marginBottom: 12,
        lineHeight: 24
    },
    txtSubTitle: {
        textAlign: 'center',
        color: '#006DAA',
        fontFamily: 'Raleway-regular',
        fontSize: 16,
        marginBottom: 26
    },
    txtBack: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium'
    },
    btnContainer: {
        marginVertical: 40,
        paddingHorizontal: 40
    },
    inputContainer: {
        marginBottom: 20
    }
});

export default RegisterScreen;