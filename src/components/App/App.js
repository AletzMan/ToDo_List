import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoFooter } from '../TodoFooter/TodoFooter';
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoButton } from "../TodoButton/TodoButton";
import { Modal } from '../Modal';
import './App.css';
import { AddTaskForm } from "../AddTaskForm";
import { TaskList } from "../TaskListLoader/TaskListLoader";
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert/ChangeAlert';


function App() {
    const {
        error,
        loading,
        taskSearch,
        taskComplete,
        taskDelete,
        totalTasks,
        completedTasks,
        onLoadModal,
        stateSearch,
        setStateSearch,
        stateModal,
        stateMessageModal,
        setStateMessageModal,
        stateDateModal,
        setStateDateModal,
        addTask,
        synchronizeTasks,
        typeModal,
        setTypeModal } = useTodos();
    return (
        <React.Fragment>
            <TodoCounter
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                loading={loading}
            />
            <TodoList>
                {error && <p>Llamar a asitencia 333-142-2547</p>}
                {loading && <><TaskList style={{ width: window.outerWidth - 64, height: 1150, viewBox: `0 0 ${window.outerWidth - 64} ${1150}` }}></TaskList> <p className="loading">Cargando, por favor espere</p></>}
                {!loading && !taskSearch.lenght}
                {!loading && taskSearch.map(({ id, text, completed, date }) => (
                    <TodoItem
                        key={id}
                        text={text}
                        completed={completed}
                        date={date}
                        taskComplete={() => taskComplete(id)}
                        taskDelete={() => taskDelete(id)} />
                ))}
            </TodoList>
            <TodoFooter loading={loading}>
                {<TodoSearch
                    stateSearch={stateSearch}
                    setStateSearch={setStateSearch}
                />}
                <TodoButton
                    onLoadModal={() => onLoadModal()}
                    setTypeModal={setTypeModal}
                />
            </TodoFooter>


            <Modal>
                {typeModal === 1 && <AddTaskForm
                    stateModal={stateModal}
                    onLoadModal={onLoadModal}
                    stateMessageModal={stateMessageModal}
                    setStateMessageModal={setStateMessageModal}
                    stateDateModal={stateDateModal}
                    setStateDateModal={setStateDateModal}
                    addTask={addTask}
                ></AddTaskForm>}
            </Modal >

            <ChangeAlert synchronize={synchronizeTasks}/>
        </React.Fragment >
    );
}


export default App;
