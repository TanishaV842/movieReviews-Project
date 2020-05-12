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
      headerStyle: { backgroundColor: '#add8e6', height: 60 }
    }
  });

export default HomeStack;