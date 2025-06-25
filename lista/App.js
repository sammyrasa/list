import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    Alert.alert('Botão Pressionado', 'Você clicou no botão!');
  };

  const handleTouchablePress = () => {
    Alert.alert('Touchable Pressionado', 'Você clicou no botão personalizado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao React Native!</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
        style={styles.image}
      />
      <Button title="Clique Aqui" onPress={handleButtonPress} />
      <TouchableOpacity style={styles.customButton} onPress={handleTouchablePress}>
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
