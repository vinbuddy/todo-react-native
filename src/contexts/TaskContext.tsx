import { createContext, ReactNode, useContext, useState } from "react";
import { I_Task } from "../types/task";

type T_TaskState = {
    tasks: I_Task[];
    completedTaskStatus: "show" | "hide";
    addTask: (task: I_Task) => void;
    editTask: (task: I_Task) => void;
    deleteTask: (id: string) => void;
    toggleCheckTask: (id: string) => void;
    toggleShowCompletedTasks: (status: "show" | "hide") => void;
};

const TaskContext = createContext<Partial<T_TaskState>>({});

// Provider
export const TaskContextProvider = ({ children }: { children: ReactNode | React.JSX.Element }) => {
    const [tasks, setTasks] = useState<I_Task[]>([]);
    const [completedTaskStatus, setCompletedTaskStatus] = useState<"show" | "hide">("show");

    const addTask = (task: I_Task) => {
        setTasks([task, ...tasks]);
    };

    const editTask = (_task: I_Task) => {
        setTasks(tasks.map((task) => (task.id === _task.id ? _task : task)));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleCheckTask = (id: string) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, isCompleted: task.isCompleted ? false : true } : task))
        );
    };

    const toggleShowCompletedTasks = (status: "show" | "hide") => {
        setCompletedTaskStatus(status);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                completedTaskStatus,
                addTask,
                editTask,
                deleteTask,
                toggleCheckTask,
                toggleShowCompletedTasks,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

// Hook
export const useTaskContext = () => useContext(TaskContext) as T_TaskState;
