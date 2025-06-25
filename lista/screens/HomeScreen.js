import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/estilos';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([{ id: '1', title: 'Tarefa 1', completed: false }, { id: '2', title: 'Tarefa 2', completed: false }]);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { task: item })}>
      <Text style={[styles.title, item.completed && styles.completed]}>{item.title}</Text>
      <TouchableOpacity style={styles.completeButton} onPress={() => {
        const updatedTasks = tasks.map(t => t.id === item.id ? { ...t, completed: !t.completed } : t);
        setTasks(updatedTasks);
      }}>
        <Text>{item.completed ? 'Desmarcar' : 'Concluir'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;