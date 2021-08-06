import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { DownArrow } from '../assets/images/icons';

const SelectInput = ({ label }) => {

    const [value, setValue] = useState('');
    const placeholder = {}

    const pickerStyle = {
        ios: {
            inputIOS: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: '#F7F7F7',
                color: '#000',
                paddingRight: 30,
            },
        },
        android: {
            inputAndroid: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: '#F7F7F7',
                color: '#000',
                paddingRight: 30,
            },
        }
    }

    return (
        <>
            <Text style={styles.text}>{label}</Text>
            <RNPickerSelect
                placeholder={placeholder}
                onValueChange={setValue}
                items={[
                    { label: 'Documento 1', value: 'doc1' },
                    { label: 'Documento 2', value: 'doc2' },
                    { label: 'Documento 3', value: 'doc3' },
                ]}
                style={Platform.OS === 'ios' ? pickerStyle.ios : pickerStyle.android}
                useNativeAndroidPickerStyle={false}
                Icon={() => <DownArrow top={20} right={14} />}
            />
        </>
    );
}

export default SelectInput;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Barlow-Medium',
        fontSize: 14,
        color: '#969A9E',
        marginBottom: 10
    }
});