import React from 'react';
import { TaskCounter } from '../../UI/TaskCounter/TaskCounter';
import { TaskList } from '../../UI/TaskList/TaskList';
import { Task } from '../../UI/Task/Task';
import { Footer } from '../../UI/Footer/Footer';
import { Search } from "../../UI/Search/Search";
import { ButtonAdd } from "../../UI/ButtonAdd/ButtonAdd";
import { Modal } from '../../UI/Modal';
import '../../components/App/App.css';
import { AddTaskForm } from "../../components/AddTaskForm";
import { TaskListLoader } from "../../UI/TaskListLoader/TaskListLoader";
import { useTodos } from '../../components/App/useTodos';
import { ChangeAlert } from '../../UI/ChangeAlert/ChangeAlert';


function HomePage() {
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
        saveTask,
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
                        id={id}
                        text={text}
                        completed={completed}
                        date={date}
                        taskComplete={() => taskComplete(id)}
                        taskDelete={() => taskDelete(id)}
                        saveTask={saveTask} />
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
                    saveTask={saveTask}
                ></AddTaskForm>}
            </Modal >

            <ChangeAlert synchronize={synchronizeTasks}/>
        </React.Fragment >
    );
}


export { HomePage };
