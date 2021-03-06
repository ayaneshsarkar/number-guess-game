import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Dimensions, 
  ScrollView
} from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over.</TitleText>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/success.png')} 
            // source={{ uri: "https://images7.alphacoders.com/594/thumb-1920-594150.jpg" }}
            style={styles.image} 
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{ roundsNumber }</Text>{' '}
            rounds to guess number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  }
})

export default GameOverScreen;
