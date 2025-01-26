import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntdIcon from "react-native-vector-icons/AntDesign";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import TaskItem from "../components/TaskItem";
import { useTaskContext } from "../contexts/TaskContext";

type TodoListScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

export default function TodoListScreen({ navigation }: TodoListScreenProps) {
    const { tasks, completedTaskStatus, toggleShowCompletedTasks } = useTaskContext();

    const handleToggleShowCompletedTasks = () => {
        toggleShowCompletedTasks(completedTaskStatus === "show" ? "hide" : "show");
    };

    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={{ fontSize: 26, fontWeight: "bold" }}>Todo List</Text>

                    <Button
                        title={completedTaskStatus === "show" ? "Hide completed" : "Show completed"}
                        onPress={handleToggleShowCompletedTasks}
                    />
                </View>

                {/* Todo list items */}
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            if (completedTaskStatus === "hide" && item.isCompleted) {
                                return null;
                            }

                            return <TaskItem task={item} navigation={navigation} />;
                        }}
                    />
                </View>
            </View>

            {/* Float create new btn */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => {
                    navigation.navigate("TodoInputScreen", {
                        type: "add",
                    });
                }}
            >
                <AntdIcon name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    createBtn: {
        backgroundColor: "#000",
        color: "#fff",
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: "black",
        width: 56,
        height: 56,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
});
