import React from "react";
import { useToast } from 'rc-toastr'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import iconEdit from "../../assets/edit-icon.png"
import arrowBack from "../../assets/arrow_back.svg"
import { Modal } from "../../UI/Modal";
import { useState } from "react";
import { AddTaskForm } from "../../components/AddTaskForm";
import { UnSavedTask } from "../../UI/UnSavedTask/UnSavedTask";
import { useTodos } from "../../components/App/useTodos";
import { useRef } from "react";

function EditTaskPage() {
    const { id } = useParams();
    const task = JSON.parse(localStorage['TASKS_V1']).find(task => task.id === parseInt(id));
    const initText = task.text;
    const initDate = task.date;
    const { saveTask } = useTodos();
    const { toast } = useToast()
    const [viewModal, setViewModal] = useState(false);
    const [ dateEdit, setDateEdit ] = useState(initDate);
    const [ messageEdit, setMessageEdit ] = useState(initText);
    const navigate = useNavigate();

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    let year = today.getFullYear();
    let dateToday = `${year}-${month}-${day}`;

    const onChangeDate = (e) => {
        setDateEdit(e.target.value)
    }

    const onChangeMessage = (e) => {
        setMessageEdit(e.target.value)
    }

    const saveEditTask = () => {
        saveTask(messageEdit, dateEdit)
        toast.success("Task saved successfully")
    }

    const backPage = () => {
        if(initText === messageEdit && initDate === dateEdit) {
            navigate(-1);
        } else {
            setViewModal(true);
        }        
    }

    return (
        <>

            {task &&
                <main className="edit">
                    <header className="edit__header">
                        <button className="edit__btnback" onClick={backPage}>
                            <img className="edit__back" src={arrowBack}></img>
                        </button>
                        <h3 className="edit__title">Edit Task</h3>
                        <img className="edit__img" src={iconEdit}></img>
                    </header>
                    <textarea onChange={(e) => onChangeMessage(e)} className="edit__task" defaultValue={messageEdit}></textarea>
                    <input onChange={(e) => onChangeDate(e)} className="edit__date" type="date" min={dateToday} defaultValue={dateEdit}></input>
                    <button className="edit__button" onClick={saveEditTask}>Save</button>
                </main>
            }
            {viewModal &&
                <Modal>
                    <UnSavedTask viewModal={viewModal} setViewModal={setViewModal}></UnSavedTask>
                </Modal>}
        </>
    )
}

export { EditTaskPage }