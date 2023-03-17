import React from 'react';
import { TaskCounter } from '../../UI/TaskCounter/TaskCounter';
import { TaskList } from '../../UI/TaskList/TaskList';
import { Task } from '../../UI/Task/Task';
import { Footer } from '../../UI/Footer/Footer';
import { Search } from "../../UI/Search/Search";
import { ButtonAdd } from "../../UI/ButtonAdd/ButtonAdd";
import '../../components/App/App.css';
import { TaskListLoader } from "../../UI/TaskListLoader/TaskListLoader";
import { useTodos } from '../../components/App/useTodos';
import { ChangeAlert } from '../../UI/ChangeAlert/ChangeAlert';
import { Filter } from '../../UI/Filter/Filter';


function HomePage() {
    const {
        error,
        loading,
        taskSearch,
        taskComplete,
        taskDelete,
        stateSearch,
        setStateSearch,
        saveTask,
        synchronizeTasks, 
        dateToday, 
        totalTasks, 
        completedTasks, 
        setStateFilter } = useTodos();
    return (
        <React.Fragment>
            <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} loading={loading} />
            <TaskList>
                {error && <p>Llamar a asitencia 333-142-2547</p>}
                {loading && <><TaskListLoader style={{ width: window.outerWidth - 64, height: 1150, viewBox: `0 0 ${window.outerWidth - 64} ${1150}` }}></TaskListLoader> <p className="loading">Cargando, por favor espere</p></>}
                {!loading && taskSearch?.map(({ id, text, statusTask, date }) => (
                    <Task
                        key={id}
                        id={id}
                        text={text}
                        statusTask={statusTask}
                        date={date}
                        taskComplete={taskComplete}
                        taskDelete={() => taskDelete(id)}
                        saveTask={saveTask}
                        dateToday={dateToday} />
                ))}
            </TaskList>
            <Footer loading={loading}>
                {<Search
                    stateSearch={stateSearch}
                    setStateSearch={setStateSearch}
                />}
                <ButtonAdd loading={loading} />
            </Footer>
            <Filter setStateFilter={setStateFilter} loading={loading} />
            <ChangeAlert synchronize={synchronizeTasks} />
        </React.Fragment >
    );
}


export { HomePage };
