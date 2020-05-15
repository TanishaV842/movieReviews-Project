import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default function Contact() {
    return (
        <SafeAreaView>
            <Card title='Contact Us' wrapperStyle={{ margin: 20 }}>
                <Text> 7 MovieLand Crossing </Text>
                <Text> Alexandria, VA 22307 </Text>
                <Text style={{ marginBottom: 20 }}> U.S.A. </Text>
                <Text> Phone: 1-757-555-1234 </Text>
                <Text> Email: movieland@movies.com </Text>
                <Image style={styles.image} />
                <Image source={require('../assets/kon-karampelas-N82naZ0N4TY-unsplash.jpg')} />
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        alignItems: 'center'
    }
});