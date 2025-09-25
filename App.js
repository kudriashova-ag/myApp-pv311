import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const clickHandler = () => {
    Alert.alert('Заголовок', 'Повідомлення', [
      { text: 'OK', onPress: () => console.log('Ok натиснуто') },
      { text: 'Скасувати' }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{backgroundColor: 'black', color: '#ffffff'}}>Hello {'\n'} World</Text>
      
      

      <View style={styles.box}>
        <Text style={styles.heading}>{Platform.OS == 'ios' ? 'one': 'two'}</Text>
      </View>
      
      <Button title="Click Me" onPress={clickHandler} />

      <Image source={require('./assets/favicon.png')} />
      {/* <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#aaa',
    padding: 20,
    marginVertical: 20,
    borderColor: "lime",
    borderWidth: 3,
    width: '50%',
    marginHorizontal: 'auto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    color: 'dodgerblue'
  }
});
