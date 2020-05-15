import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Contact from '../screens/Contact';
import Header from '../shared/Header';

const screens = {

    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MovieLand' />,
            }
        }
    },
}

const ContactStack = createStackNavigator(screens, {

    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#f0f8ff',
            height: 60
        },
    }
});

export default ContactStack;