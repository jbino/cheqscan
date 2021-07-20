import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAuth, Button, FormContainer } from '../../components';

const RecoverScreen = ({ navigation }) => {

    return (
        <>
            <BannerAuth />

            <FormContainer style={{ height: '50%' }}>
                <Text style={styles.txtTitle}>Recupera tu usuario o contraseña</Text>

                <View style={styles.btnContainer}>
                    <Button
                        text='Recuperar usuario'
                        btnStyle='outline'
                        onPress={() => navigation.navigate('RecoverUserScreen')}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        text='Recuperar contraseña'
                        btnStyle='outline'
                        onPress={() => navigation.navigate('RecoverPwdScreen')}
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
        fontSize: 22,
        marginTop: 26,
        marginBottom: 46,
    },
    txtBack: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium'
    },
    btnContainer: {
        marginBottom: 40
    }
});

export default RecoverScreen;