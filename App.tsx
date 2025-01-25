import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoListScreen from "./src/screens/TodoListScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddNewTodoScreen from "./src/screens/AddNewTodoScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="TodoListScreen"
                            component={TodoListScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="AddNewTodoScreen"
                            component={AddNewTodoScreen}
                            options={({ navigation }) => ({
                                presentation: "modal",
                                headerLeft: () => <Button title="Cancel" onPress={() => navigation.goBack()} />,
                                headerTitle: "Create new task",
                                headerTitleAlign: "center",
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
