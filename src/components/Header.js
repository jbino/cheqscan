import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { CheqScan } from '../assets/images/icons';

const Header = () => {

    return (
        <View style={styles.header}>
            <CheqScan />
            
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: 12
    },
    carousel: {
        flexGrow: 0,
        height: 150,
    }
});