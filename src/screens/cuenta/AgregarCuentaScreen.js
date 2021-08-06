import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Chekcbox, Home, Plus, Success, UncheckedBox, UserCircle } from '../../assets/images/icons';
import { Button, Card, Container, Input, Header, SelectInput, CuentaCard, BoxContainer } from '../../components';

const AgregarCuentaScreen = ({ navigation }) => {

    const [checked, setChecked] = useState(false);

    const AgregarCuenta = () => (
        <>
            <Card>
                <SelectInput label='Banco' />

                <View style={{ marginVertical: 20 }}>
                    <Input text='Número de cuenta' />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Input text='Nombre personalizado' />
                </View>

                <CheckBox
                    containerStyle={styles.checkBox}
                    title='Establecer como cuenta principal'
                    checked={checked}
                    checkedIcon={<Chekcbox />}
                    uncheckedIcon={<UncheckedBox />}
                    onPress={() => setChecked(!checked)}
                    textStyle={styles.txtCheck}
                />
            </Card>

            <View style={{ marginVertical: 30 }}>
                <Button text='Agregar cuenta' onPress={() => navigation.navigate('CuentaAgregadaScreen')} />
            </View>
        </>
    );

    return (
        <ScrollView>
            <Container>
                <AgregarCuenta />
            </Container>
        </ScrollView>
    );
}

export default AgregarCuentaScreen;

const styles = StyleSheet.create({
    checkBox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 0
    },
    txtCheck: {
        fontWeight: 'normal',
        fontFamily: 'Barlow-Regular'
    }
});