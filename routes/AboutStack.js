import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/Header';




const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About MovieLand' />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#add8e6', height: 60 },
    }
});

export default AboutStack;