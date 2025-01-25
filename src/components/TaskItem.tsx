import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TaskItem() {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const renderRightActions = () => (
        <View style={styles.rightActionWrapper}>
            <Pressable style={styles.editBtn} onPress={() => alert("Edit")}>
                <Icon name="edit" size={24} color="white" />
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={() => alert("Delete")}>
                <Icon name="delete" size={24} color="white" />
            </Pressable>
        </View>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.taskItemWrapper}>
                {/* Checkbox */}
                <Pressable
                    style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                    onPress={() => setIsChecked(!isChecked)}
                >
                    {isChecked && <Icon name="check" size={16} color={isChecked ? "white" : "black"} />}
                </Pressable>

                <Text style={[styles.taskName, isChecked && { textDecorationLine: "line-through" }]}>Task name</Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    taskItemWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 100,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxChecked: {
        backgroundColor: "black",
        borderColor: "black",
    },
    taskName: {
        fontSize: 16,
        flex: 1,
    },
    deleteBtn: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderRadius: 0,
        paddingHorizontal: 20,
    },
    editBtn: {
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderRadius: 0,
        paddingHorizontal: 20,
    },
    rightActionWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
