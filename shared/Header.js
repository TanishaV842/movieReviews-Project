import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <SafeAreaView>
            <View>
                <AntDesign name="menufold" size={24} onPress={openMenu} style={styles.icon} color="black" />
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/movie.png')} style={styles.headerImage} />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
        marginLeft: 8
    },

    icon: {
        position: 'absolute',
        color: '#333'
    },

    headerTitle: {
        flexDirection: 'row',
        height: 40,
    },

    headerImage: {
        width: 40,
        height: 30,
        marginHorizontal: 40,
        marginRight: 18,
    },
});