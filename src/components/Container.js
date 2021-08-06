import React from 'react'
import { StyleSheet, View } from 'react-native';

const Container = ({ children, row, justifyContent, style }) => {
    return (
        <View style={!row ? [styles.container, style] : [styles.containerRow, { justifyContent }, style]}>
            {children}
        </View>
    );
}

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    containerRow: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    }
})