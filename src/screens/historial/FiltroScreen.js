import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { CheckRadio, Chekcbox, UncheckedBox, UncheckedRadio } from '../../assets/images/icons';

import { Button, Card, Container } from '../../components';

const FiltroScreen = () => {

    const [checked, setChecked] = useState(false);

    return (
        <ScrollView>
            <Container>
                <Card style={{ marginVertical: 20 }}>
                    <Text style={styles.txtTitle}>Filtra depósitos por:</Text>

                    <View style={styles.divider} />

                    <Text style={styles.txtSubtitle}>Banco:</Text>
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Nombre banco'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}
                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Nombre banco'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Nombre banco'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />

                    <View style={styles.divider} />

                    <Text style={styles.txtSubtitle}>Estado de transacción</Text>
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Aprobada'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Rechazada'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='En proceso'
                        checked={checked}
                        checkedIcon={<Chekcbox />}
                        uncheckedIcon={<UncheckedBox />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />

                    <View style={styles.divider} />

                    <Text style={styles.txtSubtitle}>Recientes</Text>
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Aprobada'
                        checked={checked}
                        checkedIcon={<CheckRadio />}
                        uncheckedIcon={<UncheckedRadio />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='Rechazada'
                        checked={checked}
                        checkedIcon={<CheckRadio />}
                        uncheckedIcon={<UncheckedRadio />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />
                    <CheckBox
                        containerStyle={styles.checkBox}
                        title='En proceso'
                        checked={checked}
                        checkedIcon={<CheckRadio />}
                        uncheckedIcon={<UncheckedRadio />}
                        onPress={() => setChecked(!checked)}
                        textStyle={styles.txtCheck}

                    />

                </Card>

                <View style={{ marginBottom: 20 }}>
                    <Button
                        text='Filtrar'
                    />
                </View>
                
            </Container>
        </ScrollView>
    );
}

export default FiltroScreen;

const styles = StyleSheet.create({
    txtTitle: {
        color: '#585A5C',
        fontSize: 16,
        fontFamily: 'Raleway-Bold'
    },
    txtSubtitle: {
        fontSize: 16,
        fontFamily: 'Barlow-Medium',
        color: '#585A5C'
    },
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
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8EDF0',
        marginVertical: 10
    }
});