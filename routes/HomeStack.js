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
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#f0f8ff', height: 60}
    }
});

export default HomeStack;