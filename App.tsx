import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskItem from "./src/components/TaskItem";
import AntdIcon from "react-native-vector-icons/AntDesign";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
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

                    <TouchableOpacity style={styles.fab} onPress={() => {}}>
                        <AntdIcon name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
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
