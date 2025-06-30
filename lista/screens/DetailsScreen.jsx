import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/estilos';

const DetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? 'Concluída' : 'Pendente'}</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;