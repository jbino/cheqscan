import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Back } from '../assets/images/icons';
import { Container } from './';
import Header from './Header';

const CustomHeader = ({ scene, previous, navigation }) => {

    const { options } = scene.descriptor;
    const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;

    return (
        <View style={{ paddingBottom: 16}}>
            <Header />
            <Container row style={{ paddingHorizontal: 20 }}>
                {
                    previous ?
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Back />
                        </TouchableOpacity>
                        : undefined
                }
                {options.headerLeft && <options.headerLeft />}
                <Text style={styles.txtTitle}>{title}</Text>
            </Container>
        </View>
    );
}

export default CustomHeader;

const styles = StyleSheet.create({
    txtTitle: {
        fontFamily: 'Raleway-Medium',
        color: '#006DAA',
        marginLeft: 10,
        fontSize: 20
    },
})
