import React from "react";
import { AppContext } from "../TaskContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoFooter } from '../TodoFooter/TodoFooter';
import { Modal } from '../Modal';
import './App.css';
import { AddTaskForm } from "../AddTaskForm";
import { TaskList } from "../TaskListLoader/TaskListLoader";

function AppUI() {
    const { error, loading, taskSearch, taskComplete, taskDelete} = React.useContext(AppContext);
    let widthLoader = window.outerWidth - 64 ;
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoList>
                {error && <p>Llamar a asitencia 333-142-2547</p>}
                {loading && <TaskList style={{width: widthLoader, height: 1150, viewBox:`0 0 ${widthLoader} ${1150}`}}></TaskList>/*<p className="loading">Cargando, por favor espere</p>*/}
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
            <TodoFooter>
                
            </TodoFooter>
            
            
            <Modal>
                <AddTaskForm></AddTaskForm>
            </Modal >
        </React.Fragment>
    );
}

export { AppUI };