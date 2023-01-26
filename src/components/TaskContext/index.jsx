import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const AppContext = React.createContext();

function AppProvider(props) {
    const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('TASKS_V1', []);
    const [stateSearch, setStateSearch] = React.useState('');
    const [stateModal, setStateModal] = React.useState(false);
    const [stateMessageModal, setStateMessageModal] = React.useState('');
    const [stateDateModal, setStateDateModal] = React.useState("");
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    let taskSearch = [];

    if (stateSearch.length === 0) {
        taskSearch = tasks;
        if (taskSearch.length === 0) {
            let taskEmpty = [{ id: 0, text: 'No tienes tareas agregadas', completed: undefined, date: ''}];
            taskSearch = taskEmpty;
        }
    } else {
        taskSearch = tasks.filter(task => task.text.toLowerCase().includes(stateSearch.toLowerCase()));

        if (taskSearch.length === 0) {
            let taskEmpty = [{ id: 0, text: 'La busqueda no genero resultados', completed: undefined, date: '' }];
            taskSearch = taskEmpty;
        }
    }

    const onLoadModal = (visible) => {
        setStateModal(visible);
    }

    const addTask = (message, date) => {
        let newTaskName = message;
        let newTask = { id: tasks.length, text: newTaskName, completed: false, date: date };
        const newArratTasks = [...tasks];
        newArratTasks.push(newTask);
        saveTasks(newArratTasks);
    };
    const taskComplete = (id) => {
        const newTasks = [...tasks];
        newTasks[id].completed = !newTasks[id].completed;
        saveTasks(newTasks);
    };
    const taskDelete = (id) => {
        const newtasks = tasks.filter(task => task.id !== id);
        newtasks.map((task, index) => {
            task.id = index;
            return newtasks;
        })
        saveTasks(newtasks);
    };
    return (
        <AppContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            stateSearch,
            setStateSearch,
            taskSearch,
            taskComplete,
            taskDelete,
            stateModal,
            onLoadModal,
            setStateMessageModal,
            stateMessageModal,
            setStateDateModal,
            stateDateModal,
            addTask,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};
//<AppContext.Consumer></AppContext.Consumer>