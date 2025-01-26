import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTaskContext } from "../contexts/TaskContext";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { I_Task } from "../types/task";

type TodoInputScreenProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<
        {
            params: {
                type: "add" | "edit";
                task?: I_Task;
            };
        },
        "params"
    >;
};

export default function TodoInputScreen({ navigation, route }: TodoInputScreenProps) {
    const [value, setValue] = useState("");
    const { addTask, editTask } = useTaskContext();

    const { type, task } = route.params; // Get data from route params

    useEffect(() => {
        if (task && type === "edit") {
            setValue(task.name);
        }
    }, [task, type]);

    const handleCreateTask = () => {
        addTask({ id: Math.random().toString(), name: value, isCompleted: false });
        setValue("");

        navigation.goBack();
    };

    const handleEditTask = () => {
        if (task && type === "edit") {
            editTask({
                ...task,
                name: value,
            });

            navigation.goBack();
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
            {/* Header */}
            <View style={styles.formWrapper}>
                <TextInput
                    autoFocus
                    editable
                    multiline
                    onChangeText={(text) => setValue(text)}
                    value={value}
                    placeholder="Enter task name"
                    placeholderTextColor="#555E"
                    style={{ borderColor: "#d4d4d8", borderBottomWidth: 1, paddingBottom: 12 }}
                />

                <TouchableOpacity
                    style={[styles.createTaskBtn, value.trim().length === 0 && { opacity: 0.6 }]}
                    disabled={value.trim().length === 0}
                    onPress={type === "add" ? handleCreateTask : handleEditTask}
                >
                    <Text style={{ color: "#fff" }}>{type === "add" ? "Create" : "Edit"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    createTaskBtn: {
        backgroundColor: "#000",
        color: "#fff",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    formWrapper: {
        padding: 20,
        backgroundColor: "#f4f4f5",
        borderRadius: 10,
    },
});
