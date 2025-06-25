import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/estilos';

const AddTaskScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle) {
      navigation.navigate('Home', { newTask: { id: Date.now().toString(), title: taskTitle, completed: false } });
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Digite o título da tarefa"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskScreen;