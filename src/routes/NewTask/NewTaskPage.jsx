import React from "react";
import addTaskImage from "../../assets/add-icon.png"
import arrowIcon from "../../assets/arrow_back.svg"
import { Modal } from "../../UI/Modal";
import { useState } from "react";
import { UnSavedTask } from "../../UI/UnSavedTask/UnSavedTask";
import "../NewTask/NewTask.css"
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../components/App/useTodos";
import { useToast } from 'rc-toastr'

function NewTaskPage() {
    const taskID = JSON.parse(localStorage.getItem('TASKS_V1')).length;
    const initState = { date: '', nameTask: '', viewModal: false }
    const [viewModal, setViewModal] = useState(initState.viewModal);
    const [dateTask, setDateTask] = useState(initState.date);
    const [nameTask, setNameTask] = useState(initState.nameTask);
    const { addTask } = useTodos();
    const { toast } = useToast()
    const navigate = useNavigate();

    console.log(taskID)

    const searchInput = (e) => {
        setNameTask(e.target.value)
    }

    const validateInput = (e) => {
        e.preventDefault();
        if (nameTask === '' || dateTask === '') {
            toast.error("Favor de llenar los campos");
        } else {
            addTask(nameTask, dateTask);
            toast.success("Tarea agregada");
            navigate("/");
        }
    }
    const inputDate = (e) => {
        setDateTask(e.target.value)
    }

    const backPage = () => {
        if (initState.nameTask === nameTask && initState.date === dateTask) {
            navigate("/");
        } else {
            setViewModal(true);
        }
    }

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    let year = today.getFullYear();
    let dateToday = `${year}-${month}-${day}`;
    return (
        <main className={`newtask__main`}>
            <header className="header__newtask">
                <button className="edit__btnback" onClick={backPage}>
                    <img className="edit__back" src={arrowIcon}></img>
                </button>
                <h1 className="header__titles" from="taskName">Agregar nueva tarea</h1>
                <img className="header__imagetask" src={addTaskImage} alt="add task"></img>
            </header>
            <form onSubmit={validateInput} className="taskform">
                <textarea className="taskform__text"
                    name="taskName"
                    type='text'
                    autoFocus
                    placeholder="Nombre de tarea"
                    value={nameTask}
                    onInput={searchInput}>
                </textarea>
                <label className="taskform__labeldate" from="dateTaskEnd">Fecha Limite</label>
                <input name="dateTaskEnd" className="taskform__date" type="date" onChange={inputDate} value={dateTask}></input>
                <button type="submit" className="taskform__button--add taskform__button"
                >Agregar</button>
            </form>
            {viewModal &&
                <Modal>
                    <UnSavedTask viewModal={viewModal} setViewModal={setViewModal}></UnSavedTask>
                </Modal>}
        </main>
    );
}

export { NewTaskPage };