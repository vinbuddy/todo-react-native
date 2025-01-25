import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskItem from "../components/TaskItem";
import AntdIcon from "react-native-vector-icons/AntDesign";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

type TodoListScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

export default function TodoListScreen({ navigation }: TodoListScreenProps) {
    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={{ fontSize: 26, fontWeight: "bold" }}>Todo List</Text>

                    <Button title="Hide completed" onPress={() => {}} />
                </View>

                {/* Todo list items */}
                <View style={{ marginTop: 20 }}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </View>
            </View>

            {/* Float create new btn */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => {
                    navigation.navigate("AddNewTodoScreen");
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
