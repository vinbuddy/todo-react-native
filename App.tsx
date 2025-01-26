import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TodoListScreen from "./src/screens/TodoListScreen";
import TodoInputScreen from "./src/screens/TodoInputScreen";
import { TaskContextProvider } from "./src/contexts/TaskContext";

const Stack = createStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TaskContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="TodoListScreen"
                                component={TodoListScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="TodoInputScreen"
                                component={TodoInputScreen}
                                options={({ navigation }) => ({
                                    presentation: "modal",
                                    headerLeft: () => <Button title="Cancel" onPress={() => navigation.goBack()} />,
                                    headerTitle: "Create new task",
                                    headerTitleAlign: "center",
                                    headerShadowVisible: false,
                                })}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
            </TaskContextProvider>
        </GestureHandlerRootView>
    );
}
