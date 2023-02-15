import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const { item: tasks, saveItem: saveTasks, loading, error, synchronizeItem: synchronizeTasks } = useLocalStorage('TASKS_V1', []);
    const [stateSearch, setStateSearch] = React.useState('');
    const [stateModal, setStateModal] = React.useState(false);
    const [typeModal, setTypeModal] = React.useState(0);
    const [stateMessageModal, setStateMessageModal] = React.useState('');
    const [stateDateModal, setStateDateModal] = React.useState("");
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    let taskSearch = [];

    if (stateSearch.length === 0) {
        taskSearch = tasks;
        if (taskSearch.length === 0) {
            let taskEmpty = [{ id: 0, text: 'No tienes tareas agregadas', completed: undefined, date: '' }];
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

    const saveTask = (message, date) => {
        console.log(message, date)
    }

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

    return ({
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
        saveTask,
        synchronizeTasks,
        typeModal, 
        setTypeModal
    });
}

export { useTodos };
//<AppContext.Consumer></AppContext.Consumer>