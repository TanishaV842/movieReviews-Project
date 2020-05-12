import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View>
            <AntDesign name="menufold" size={24} onPress={openMenu} style={styles.icon} color="black" />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/movie.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        // width: 100,
        // height: 100,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
        marginLeft: 8
    },
    icon: {
        position: 'absolute',
    },

    headerTitle: {
        flexDirection: 'row'
    },

    headerImage: {
        width: 40,
        height: 30,
        marginHorizontal: 40,



    },

});