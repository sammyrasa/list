import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

export default function ItemCard({ title, description, color, checked, onToggleCheck }) {
    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <View style={styles.itemContainer}>
                <CheckBox
                    checked={checked}
                    onPress={onToggleCheck}
                />
                <View style={{ flex: 1 }}>
                    <Text style={[styles.cardTitle, checked && styles.checkedText]}>
                        {title}
                    </Text>
                    <Text style={[styles.cardDescription, checked && styles.checkedText]}>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    checkedText: {
        textDecorationLine: 'line-through',
        color: '#999',
    },

});