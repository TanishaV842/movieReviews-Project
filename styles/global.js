import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
       fontSize: 20,
       fontWeight: 'bold',
       color: '#696969'
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,  
    }
});

export const images = {
  ratings: {
    '1': require('../assets/Star_rating_1_of_5.png'), 
    '2': require('../assets/Star_rating_2_of_5.png'),
    '3': require('../assets/Star_rating_3_of_5.png'),
    '4': require('../assets/Star_rating_4_of_5.png'),
    '5': require('../assets/Star_rating_5_of_5.png'),
  }
};