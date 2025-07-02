import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';

const PASTEL_COLORS = [
    '#FADADD', '#D0F0C0', '#B0E0E6', '#FFFACD', '#E6E6FA',
    '#F5DEB3', '#AED9E0', '#FFE4E1', '#F0EAD6', '#E0BBE4',
];

function getRandomPastelColor() {
    const index = Math.floor(Math.random() * PASTEL_COLORS.length);
    return PASTEL_COLORS[index];
}

export default function HomeScreen() {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const navigation = useNavigation();

    const adicionarItem = () => {
        if (!newTitle.trim()) return;

        const novoItem = {
            id: (data.length + 1).toString(),
            title: newTitle,
            description: newDescription,
            color: getRandomPastelColor(),
            checked: false,
        };

        setData([...data, novoItem]);
        setNewTitle('');
        setNewDescription('');
        setModalVisible(false);
    };

    const toggleCheck = (id) => {
        const newData = data.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setData(newData);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate('Details', { item })}
        >
            <View style={styles.itemContainer}>
                <CheckBox
                    checked={item.checked}
                    onPress={() => toggleCheck(item.id)}
                />
                <View>
                    <Text
                        style={[
                            styles.itemTitle,
                            item.checked && styles.checkedText,
                        ]}
                    >
                        {item.title}
                    </Text>
                    {item.description ? (
                        <Text
                            style={[
                                styles.itemDesc,
                                item.checked && styles.checkedText,
                            ]}
                        >
                            {item.description}
                        </Text>
                    ) : null}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checklist</Text>

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>+ Adicionar Tarefa</Text>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Nova Tarefa</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={newTitle}
                            onChangeText={setNewTitle}
                        />

                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Descrição"
                            value={newDescription}
                            onChangeText={setNewDescription}
                            multiline
                        />

                        <View style={styles.modalButtons}>
                            <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </Pressable>

                            <Pressable style={styles.saveButton} onPress={adicionarItem}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
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
    list: {
        flex: 1,
    },
    separator: {
        height: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    card: {
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDesc: {
        fontSize: 14,
        color: '#555',
    },
    checkedText: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
});
