import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { launchCamera } from 'react-native-image-picker';
import { Camera, Dollar } from '../../assets/images/icons';
import { Button, Card, Container, Header } from '../../components';

const TakePhotoScreen = ({ navigation, route }) => {

    const [photoFront, setPhotoFront] = useState(route.params.photo);
    const [photoBack, setPhotoBack] = useState('');

    const takePhotoFront = () => {
        launchCamera({ mediaType: 'photo', quality: 0.5 }, (resp) => {
            if (!resp.didCancel) {
                setPhotoFront(resp.assets[0].uri);
            }
        });
    }

    const takePhotoBack = () => {
        launchCamera({ mediaType: 'photo', quality: 0.5 }, (resp) => {
            if (!resp.didCancel) {
                setPhotoBack(resp.assets[0].uri);
            }
        });
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <Container>
                <Header />

                <Card style={{ marginVertical: 20, paddingVertical: 40 }}>

                    <Container row style={{ marginBottom: 20 }}>
                        <Dollar width={36} style={{ marginRight: 10 }} />
                        <Text>Cheque adelante</Text>
                    </Container>

                    <View style={styles.imgContainer}>
                        <Image
                            source={{ uri: photoFront }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>

                    <Container row justifyContent='space-between' style={{ marginTop: 20 }}>
                        <View style={{ width: '44%' }}>
                            <Button
                                text='Ver foto'
                                btnStyle='outline'
                            />
                        </View>

                        <View style={{ width: '44%' }}>
                            <Button
                                text='Nueva foto'
                                onPress={takePhotoFront}
                            />
                        </View>
                    </Container>


                    <View style={styles.divider} />

                    <Container row style={{ marginBottom: 20 }}>
                        <Dollar width={36} style={{ marginRight: 10 }} />
                        <Text>Cheque atrás</Text>
                    </Container>

                    {
                        !photoBack ? (
                            <View style={styles.imgContainer}>
                                <View style={{ width: '50%' }}>
                                    <Button
                                        text='Tomar foto'
                                        onPress={takePhotoBack}
                                    />
                                </View>
                            </View>
                        ) : (
                            <>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{ uri: photoBack }}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </View>

                                <Container row justifyContent='space-between' style={{ marginTop: 20 }}>
                                    <View style={{ width: '44%' }}>
                                        <Button
                                            text='Ver foto'
                                            btnStyle='outline'
                                        />
                                    </View>

                                    <View style={{ width: '44%' }}>
                                        <Button
                                            text='Nueva foto'
                                            onPress={takePhotoBack}
                                        />
                                    </View>
                                </Container>
                            </>
                        )
                    }

                </Card>

                <Button text='Continuar' onPress={() => navigation.navigate('VerificarDeposito', { photo: photoFront })} />
            </Container>
        </ScrollView>
    );
}

export default TakePhotoScreen;

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
    imgContainer: {
        backgroundColor: '#E8EDF0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 144,
        borderRadius: 10,
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