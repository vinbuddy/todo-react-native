import { useState } from "react";
import { Button, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function AddNewTodoScreen() {
    const [value, onChangeText] = useState("");

    return (
        <View>
            {/* Header */}
            <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
                <TextInput
                    autoFocus
                    editable
                    multiline
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    placeholder="Enter task name"
                    placeholderTextColor="#555E"
                    style={{ borderColor: "#ddd", borderBottomWidth: 1, paddingVertical: 12 }}
                />

                <TouchableOpacity
                    style={[styles.createTaskBtn, value.trim().length === 0 && { opacity: 0.7 }]}
                    disabled={value.trim().length === 0}
                >
                    <Button title="Create" color="#fff" onPress={() => {}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    createTaskBtn: {
        backgroundColor: "#000",
        color: "#fff",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
});
