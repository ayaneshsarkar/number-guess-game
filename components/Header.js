import { View, StyleSheet, Platform } from 'react-native';
import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={{ 
      ...styles.headerBase, 
      ...Platform.select({ 
        ios: styles.headerIOS,
        android: styles.headerAndroid
      }) 
    }}>
      <TitleText style={styles.title}>{ title }</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({  
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
});

export default Header;
