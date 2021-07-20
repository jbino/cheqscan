import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Logo } from '../assets/images/icons';

const BannerAuth = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../assets/images/background-login.jpg')}
                style={styles.imgBanner}
            />
            <Logo style={{ position: 'absolute', top: 42 }} width='300' heigth='200' />
        </View>
    );
}

const styles = StyleSheet.create({
    imgBanner: {
        width: '100%',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
    },
})

export default BannerAuth;