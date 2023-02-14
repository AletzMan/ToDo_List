import React from 'react';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { TaskList } from '../TaskList/TaskList';
import { Task } from '../Task/Task';
import { Footer } from '../Footer/Footer';
import { Search } from "../Search/Search";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import { Modal } from '../Modal';
import './App.css';
import { AddTaskForm } from "../AddTaskForm";
import { TaskListLoader } from "../TaskListLoader/TaskListLoader";
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
            <TaskCounter
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                loading={loading}
            />
            <TaskList>
                {error && <p>Llamar a asitencia 333-142-2547</p>}
                {loading && <><TaskListLoader style={{ width: window.outerWidth - 64, height: 1150, viewBox: `0 0 ${window.outerWidth - 64} ${1150}` }}></TaskListLoader> <p className="loading">Cargando, por favor espere</p></>}
                {!loading && !taskSearch.lenght}
                {!loading && taskSearch.map(({ id, text, completed, date }) => (
                    <Task
                        key={id}
                        text={text}
                        completed={completed}
                        date={date}
                        taskComplete={() => taskComplete(id)}
                        taskDelete={() => taskDelete(id)} />
                ))}
            </TaskList>
            <Footer loading={loading}>
                {<Search
                    stateSearch={stateSearch}
                    setStateSearch={setStateSearch}
                />}
                <ButtonAdd
                    onLoadModal={() => onLoadModal()}
                    setTypeModal={setTypeModal}
                />
            </Footer>


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
