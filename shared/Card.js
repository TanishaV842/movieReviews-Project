import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 9,
        elevation: 3,
        backgroundColor: '#f0f8ff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginTop: 18,
        marginHorizontal: 8,
        marginVertical: 3,
    },

    cardContent: {
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 13,
        marginBottom: 13,
        padding: 10,
    }
});