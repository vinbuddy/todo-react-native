import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";
import { I_Task } from "../types/task";
import { useTaskContext } from "../contexts/TaskContext";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface I_TaskItemProps {
    task: I_Task;
    navigation: NavigationProp<ParamListBase>;
}

export default function TaskItem({ task, navigation }: I_TaskItemProps) {
    const [isChecked, setIsChecked] = useState<boolean>(task.isCompleted);
    const { toggleCheckTask, deleteTask } = useTaskContext();
    const swipeableRef = useRef<Swipeable>(null);

    const renderRightActions = () => (
        <View style={styles.rightActionWrapper}>
            <Pressable style={styles.editBtn} onPress={handleOpenEditTaskScreen}>
                <Icon name="edit" size={24} color="white" />
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={handleDeleteTask}>
                <Icon name="delete" size={24} color="white" />
            </Pressable>
        </View>
    );

    const handleDeleteTask = () => {
        // Show alert
        Alert.alert("Delete task", `Are you sure you want to delete task "${task.name}"?`, [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "Delete",
                onPress: () => deleteTask(task.id),
                style: "destructive", // Danger
            },
        ]);
    };

    const handleToggleCheckTask = () => {
        setIsChecked(!isChecked);

        setTimeout(() => {
            toggleCheckTask(task.id);
        }, 1500);
    };

    const handleOpenEditTaskScreen = () => {
        navigation.navigate("TodoInputScreen", {
            type: "edit",
            task,
        });

        // Close swipeable
        if (swipeableRef.current) {
            swipeableRef.current.close();
        }
    };

    return (
        <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
            <View style={styles.taskItemWrapper}>
                {/* Checkbox */}
                <Pressable
                    style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                    onPress={handleToggleCheckTask}
                >
                    {isChecked && <Icon name="check" size={16} color={isChecked ? "white" : "black"} />}
                </Pressable>

                <Text style={[styles.taskName, isChecked && { textDecorationLine: "line-through" }]}>{task.name}</Text>
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
