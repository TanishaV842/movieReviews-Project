import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#f8f8ff',
  },

  titleText: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6
  },

  paragraph: {
    lineHeight: 20,
    marginVertical: 8,

  },

  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#87ceeb',
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 8,
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10
  },

  errorText: {
    color: 'firebrick',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
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