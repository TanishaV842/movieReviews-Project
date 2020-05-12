import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import Header from '../shared/Header';



const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MovieLand' />,

            }
        }
    },
    Reviews: {
        screen: Reviews,
        navigationOptions: {
            headerTitle: 'Movie Reviews',


        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            headerTintColor: '#444',
            backgroundColor: '#b0c4de',
            height: 65
        }
    }
});

export default HomeStack;