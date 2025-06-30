import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const pedidos = [
  {
    id: '1',
    cliente: 'Ana Paula',
    status: 'Em preparo',
    tempo: '15 min',
  },
  {
    id: '2',
    cliente: 'Lucas Silva',
    status: 'Em entrega',
    tempo: 'A caminho',
  },
  {
    id: '3',
    cliente: 'Beatriz Moura',
    status: 'Finalizado',
    tempo: 'Entregue',
  },
];

const coresStatus = {
  'Em preparo': '#FFA500',
  'Em entrega': '#1E90FF',
  'Finalizado': '#32CD32',
};

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cliente}>{item.cliente}</Text>
      <Text style={styles.tempo}>⏱️ {item.tempo}</Text>
      <Text style={[styles.status, { color: coresStatus[item.status] }]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedidos Recebidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cliente: {
    fontSize: 18,
    fontWeight: '600',
  },
  tempo: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
