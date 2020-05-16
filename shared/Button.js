import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    
    btn: {
        backgroundColor: '#4169e1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center'

    }
});