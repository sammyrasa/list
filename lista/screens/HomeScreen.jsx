import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import ItemCard from '../components/ItemCard';

const DATA = [
    { id: '1', title: 'Tarefa 1', description: 'Descrição da Tarefa 1' },
    { id: '2', title: 'Tarefa 2', description: 'Descrição da Tarefa 2' },
    { id: '3', title: 'Tarefa 3', description: 'Descrição da Tarefa 3' },
    { id: '4', title: 'Tarefa 4', description: 'Descrição da Tarefa 4' },
    { id: '5', title: 'Tarefa 5', description: 'Descrição da Tarefa 5' },
];

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState(DATA);

    const renderItem = ({ item }) => (
        <ItemCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('Details', { item })}
        />
    );

    const adicionarItem = () => {
        const novoItem = {
            id: (data.length + 1).toString(),
            title: `Tarefa ${data.length + 1}`,
            description: `Descrição da Tarefa ${data.length + 1}`,
        };

        setData([...data, novoItem]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>

            <TouchableOpacity style={styles.button} onPress={adicionarItem}>
                <Text style={styles.buttonText}>Adicionar Tarefa</Text>
            </TouchableOpacity>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    list: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    listHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});