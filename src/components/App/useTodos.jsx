import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useFilter } from "../Hooks/UseFilter";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const { item: tasks, saveItem: saveTasks, loading, error, synchronizeItem: synchronizeTasks } = useLocalStorage('TASKS_V1', []);
    const [stateSearch, setStateSearch] = useState('');
    const [stateFilter, setStateFilter] = useState({});
    const { sortFilterArray } = useFilter();
    let completedTasks = tasks.filter(task => task.statusTask === 'completed').length;
    const totalTasks = tasks.length;
    let taskSearch = tasks;



    if (stateSearch.length === 0) {
        taskSearch = tasks;
        if (taskSearch.length === 0) {
            console.log('AQUI NO TASKS')
            let taskEmpty = [{ id: 0, text: 'No tienes tareas agregadas', statusTask: 'noTask', date: '' }];
            taskSearch = taskEmpty;
            console.log(taskSearch)
        }
    } else {
        taskSearch = tasks.filter(task => task.text.toLowerCase().includes(stateSearch.toLowerCase()));

        console.log('AQUI ELSE')

        if (taskSearch.length === 0) {
            let taskEmpty = [{ id: 0, text: 'La busqueda no genero resultados', statusTask: 'noFound', date: '' }];
            taskSearch = taskEmpty;
        }
    }


    // useEffect(() => {
    let resultFilter = [];
    if (stateFilter.completed && tasks.length > 0) {
        console.log('AQUI COMPLETES')
        const filterCompleted = taskSearch.filter(task => task.statusTask === 'completed')
        filterCompleted.map(filter => resultFilter.push(filter));
    }
    if (stateFilter.pending && tasks.length > 0) {
        console.log('AQUI PENDING')
        const filterPending = taskSearch.filter(task => task.statusTask === 'pending')
        filterPending.map(filter => resultFilter.push(filter));
    }
    if (stateFilter.overdue && tasks.length > 0) {
        console.log('AQUI OVERDUE')
        const filterOverdue = taskSearch.filter(task => task.statusTask === 'overdue')
        filterOverdue.map(filter => resultFilter.push(filter));
    }

    resultFilter = sortFilterArray(resultFilter, false);
    console.log(resultFilter)
    if (tasks.length > 0) {
        if (stateFilter.date) {
            console.log('AQUI 1')
            resultFilter = sortFilterArray(resultFilter, false);
        } else {
            console.log('AQUI 2')
            resultFilter = sortFilterArray(resultFilter, true);
        }
    }

    if (!stateFilter.completed && !stateFilter.pending && !stateFilter.overdue && tasks.length > 0) {
        console.log('AQUI 3')
        if (stateFilter.date) {
            resultFilter = sortFilterArray(taskSearch, false);
        } else {
            resultFilter = sortFilterArray(taskSearch, true);
        }
    }


    if (tasks.length !== 0) {
        if (resultFilter.length === 0) {
            console.log('AQUI 4')
            let taskEmpty = [{ id: 0, text: 'La busqueda no genero resultados', statusTask: 'noFound', date: '' }];
            taskSearch = taskEmpty;
        } else {
            taskSearch = resultFilter;
        }
    }

    const addTask = (message, date) => {
        let newTaskName = message;
        let newTask = { id: tasks.length, text: newTaskName, statusTask: 'pending', date: date };
        const newArrayTasks = [...tasks];
        newArrayTasks.push(newTask);
        saveTasks(newArrayTasks);
    };

    const saveTask = (id, message, statusTask, date) => {
        const editTask = { id: parseInt(id), text: message, statusTask: statusTask, date: date };
        const newArrayTasks = tasks.map(task => {
            if (task.id == id) {
                return task = editTask;
            } else {
                return task;
            }
        })
        saveTasks(newArrayTasks);

    }

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    let year = today.getFullYear();
    let dateToday = `${year}-${month}-${day}`;

    const taskComplete = (id) => {
        if (tasks.length > 0) {
            const newTasks = [...tasks];
            if (tasks.filter(task => task.id === id)[0].statusTask === 'pending' || tasks.filter(task => task.id === id)[0].statusTask === 'overdue') {
                newTasks.map(function (task) {
                    if (task.id === id) return task.statusTask = 'completed';
                    else return task;
                })
            } else if (tasks.filter(task => task.id === id)[0].statusTask === 'completed' && tasks.filter(task => task.id === id)[0].date < dateToday) {
                newTasks.map(function (task) {
                    if (task.id === id) return task.statusTask = 'overdue';
                    else return task;
                })
            } else if (tasks.filter(task => task.id === id)[0].statusTask === 'completed' && tasks.filter(task => task.id === id)[0].date >= dateToday) {
                newTasks.map(function (task) {
                    if (task.id === id) return task.statusTask = 'pending';
                    else return task;
                })
            }
            saveTasks(newTasks);
        }
    };
    const taskDelete = (id) => {
        const newtasks = tasks.filter(task => task.id !== id);
        newtasks.map((task, index) => {
            task.id = index;
            return newtasks;
        })
        saveTasks(newtasks);
    };
    console.log(taskSearch)
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
        addTask,
        saveTask,
        synchronizeTasks,
        dateToday,
        setStateFilter
    });
}

export { useTodos };
//<AppContext.Consumer></AppContext.Consumer>