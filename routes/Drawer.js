import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const MainDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    Contact: {
        screen: ContactStack
    }
});

export default createAppContainer(MainDrawerNavigator);