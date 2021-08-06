import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Pencil, Plus, Star, Trash } from '../../assets/images/icons';
import { Button, Card, Container } from '../../components';

const CuentaScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Container style={{ marginVertical: 20 }}>
                <Text style={styles.txtTitle}>Mis cuentas</Text>

                <Card style={{ marginTop: 20 }}>
                    <Container row justifyContent='space-between'>
                        <Text style={styles.txtBold}>Mi cuenta</Text>
                        <Container row>
                            <Pencil style={{ marginRight: 12 }} />
                            <Star />
                        </Container>
                    </Container>

                    <View style={styles.divider} />

                    <Container row justifyContent='space-between'>
                        <Text style={styles.txtLigth}>Banco</Text>
                        <Text style={styles.txtBold}>Banco Pichincha</Text>
                    </Container>

                    <View style={styles.divider} />

                    <Container row justifyContent='space-between'>
                        <Text style={styles.txtLigth}>Cuenta de ahorros</Text>
                        <Text style={styles.txtBold}>123456789</Text>
                    </Container>

                    <View style={styles.divider} />

                    <Trash style={{ alignSelf: 'flex-end' }} />
                </Card>

                <View style={styles.btnContainer}>
                    <Button
                        text='Agregar cuenta'
                        btnStyle='outline'
                        leftIcon={<Plus />}
                        onPress={() => navigation.navigate('AgregarCuentaScreen')}
                    />
                </View>

                <Text style={styles.txtTitle}>Mis datos</Text>
                <Card style={{ marginTop: 20 }}>
                    <Text style={styles.txtLigth}>fsandoval</Text>
                    <View style={styles.divider} />

                    <Text style={styles.txtLigth}>fsandoval@correo.com</Text>
                    <View style={styles.divider} />

                    <Text style={styles.txtLigth}>+593 12 345 6789</Text>
                    <View style={styles.divider} />

                    <Pencil style={{ alignSelf: 'flex-end' }} />
                </Card>
            </Container>
        </ScrollView>
    );
}

export default CuentaScreen;

const styles = StyleSheet.create({
    txtTitle: {
        fontFamily: 'Raleway-Bold',
        fontSize: 17,
        color: '#585A5C'
    },
    txtBold: {
        fontFamily: 'Barlow-Bold',
        fontSize: 15,
        color: '#585A5C'
    },
    txtLigth: {
        fontFamily: 'Barlow-Regular',
        fontSize: 15,
        color: '#585A5C'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0',
        marginVertical: 14
    },
    btnContainer: {
        paddingHorizontal: '16%',
        marginTop: 30,
        marginBottom: 36
    }
});