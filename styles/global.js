import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f5f5f5'
    
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,

  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
   
    
    
    
    
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