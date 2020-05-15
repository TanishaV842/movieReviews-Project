import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/Header';

const screens = {
    
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MovieLand' />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {

    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#f0f8ff',
            height: 60
        },
    }
});

export default AboutStack;