import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Key, UserCircle } from '../../assets/images/icons';
import { BannerAuth, BoxContainer, FormContainer } from '../../components';

const RecoverScreen = ({ navigation }) => {

    return (
        <>
            <BannerAuth />

            <FormContainer style={{ height: '50%', paddingBottom: 26 }}>
                <Text style={styles.txtTitle}>Recupera tu usuario o contraseña</Text>

                <View style={styles.rowContainer}>
                    <BoxContainer
                        text='Recuperar usuario'
                        icon={<UserCircle color='#006DAA' />}
                        onPress={() => navigation.navigate('RecoverUserScreen')}
                    />
                    <BoxContainer
                        text='Recuperar contraseña'
                        icon={<Key color='#006DAA' />}
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
        marginBottom: 50,
    },
    txtBack: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#585A5C',
        fontFamily: 'Barlow-Medium'
    },
    btnContainer: {
        marginBottom: 40
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 'auto'
    }
});

export default RecoverScreen;