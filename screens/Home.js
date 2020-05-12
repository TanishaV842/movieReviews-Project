import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Abominable', rating: 5, body: 'A fantastic and heartwarming family movie', key: '1' },
        { title: 'Queen of Katwe', rating: 4, body: 'Touching and inspirational', key: '2' },
        { title: 'Captain America: The First Avenger', rating: 3, body: 'Adventurous and strengthening', key: '3' },
        { title: 'Boo! A Madea Halloween', rating: 2, body: 'Not that great', key: '4' },
        { title: 'Pitch Black', rating: 1, body: 'Not interesting, rather boring', key: '5' }
    ]);

    const submitReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.toggleModal, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm submitReview={submitReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.toggleModal}
                onPress={() => setModalOpen(true)}
            />

            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Reviews', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />

        </View>
    );
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