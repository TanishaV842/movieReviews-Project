import React, { useState } from 'react';
import {
    StyleSheet, View, Text, FlatList, TouchableOpacity,
    Modal, TouchableWithoutFeedback, Keyboard
} from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([

        {
            title: 'Queen of Katwe',
            rating: 4,
            body: 'Touching and inspirational',
            key: '1'
        },

        {
            title: 'Abominable',
            rating: 5,
            body: 'A fantastic and heartwarming family movie',
            key: '2'
        },

        {
            title: 'Pitch Black',
            rating: 1,
            body: 'Not interesting, rather boring',
            key: '3'
        },

        {
            title: 'Captain America-The First Avenger',
            rating: 3,
            body: 'Adventurous and strengthening',
            key: '4'
        },
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
            <Text style={styles.movies}> Reviewed Titles </Text>
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
        marginLeft: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#4169e1',
        padding: 15,
        borderRadius: 10,
        alignSelf: 'flex-start',
        shadowOpacity: 1,
        backgroundColor: '#f0f8ff'
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        alignSelf: 'flex-start',
        shadowOpacity: 0.5,
        backgroundColor: '#f0f8ff'
    },

    modalContent: {
        flex: 1
    },

    movies: {
        textAlign: 'center',
        color: '#4169e1',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginRight: 12,
        padding: 12
    }
});