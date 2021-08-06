import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Camera, Dollar } from '../../assets/images/icons';
import { Button, Card, Container, Header } from '../../components';

const ChequeScreen = ({ navigation }) => {

    const takePhoto = () => {
        launchCamera({ mediaType: 'photo', quality: 0.5 }, (resp) => {
            if (!resp.didCancel) {
                navigation.navigate('TakePhotoScreen', { photo: resp.assets[0].uri });
            }
        });
    }

    return (
        <Container>
            <Header />

            <Card style={{ marginTop: 20, alignItems: 'center', paddingVertical: 40 }}>
                <Camera />

                <Text style={styles.txtTitle}>Prepara tu cheque</Text>
                <Text style={styles.txtDesc}>Captura primero el frente de tu cheque y luego la parte de atrás</Text>

                <View style={{ width: '60%' }}>
                    <Container row justifyContent='space-between' >
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.circle}>
                                <Text style={styles.txtNumber}>1</Text>
                            </View>
                            <Dollar />
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.circle}>
                                <Text style={styles.txtNumber}>2</Text>
                            </View>
                            <Dollar />
                        </View>
                    </Container>
                </View>

                <View style={styles.divider} />

                <View style={{ width: '100%' }}>
                    <Button
                        text='Comenzar'
                        onPress={takePhoto}
                    />
                </View>

            </Card>
        </Container>
    );
}

export default ChequeScreen;

const styles = StyleSheet.create({
    txtTitle: {
        color: '#006DAA',
        fontFamily: 'Raleway-Regular',
        fontSize: 20
    },
    txtDesc: {
        color: '#585A5C',
        fontFamily: 'Barlow-Regular',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 20
    },
    txtNumber: {
        color: '#fff',
        fontFamily: 'Raleway-Medium',
        fontSize: 20,
        lineHeight: 50,
    },
    circle: {
        marginBottom: 14,
        backgroundColor: '#006DAA',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    divider: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0',
        marginVertical: 30
    }
});