import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Yelp', rating: 5, body: 'Superb', key: '1' },
        { title: 'Hello', rating: 4, body: 'Good', key: '1' },
        { title: 'What is That', rating: 3, body: 'Super', key: '1' },
    ]);

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent} >
                    <MaterialIcons
                        name='close'
                        size={26}
                        style={{ ...styles.toggleModal, ...styles.closeModal }}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello, There!</Text>
                </View>
            </Modal>
            <MaterialIcons
                name='add'
                size={26}
                style={styles.toggleModal}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Reviews', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>

                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    toggleModal: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    closeModal: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,

    }
})