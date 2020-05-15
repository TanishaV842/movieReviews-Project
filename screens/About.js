import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

export default function About() {
    return (
        <Card title='About Us'>
            <SafeAreaView>
                <View style={styles.image}>
                    <Text style={styles.text}>
                        MovieLand is family-owned and operated. We recently launched our app to allow you, the user to view ratings of movies submitted by others and/or submit reviews of movies you've watched. So we hope you enjoy using our app!
                </Text>
                    <Image source={require('../assets/henry-co-unsplash.jpg')} />
                </View>
            </SafeAreaView>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 18,
        margin: 10,
        justifyContent: 'space-evenly'
    }
});

