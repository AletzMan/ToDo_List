import React from "react";
import { AppContext } from "../TaskContext";
import addTaskImage  from "../../assets/task_add.svg"


function AddTaskForm() {
    const { stateModal, onLoadModal, stateMessageModal, setStateMessageModal, stateDateModal, setStateDateModal, addTask } = React.useContext(AppContext);
    let messageError = "No puede quedar el campo vacio";
    const [stateError, setStateError] = React.useState('');
    const searchInput = (event) => {
        setStateMessageModal(event.target.value);
        if (stateMessageModal !== '') {
            setStateError("error__none");
        }
    }
    const closeModal = () => {        
            setStateMessageModal('')
            setStateDateModal('');
            onLoadModal(false);   
            setStateError("error__none");    
    }
    const validateInput = (e) => {
        e.preventDefault();
        if (stateMessageModal !== '' && stateDateModal !== '') {
            addTask(stateMessageModal, stateDateModal);
            onLoadModal(false);
            setStateMessageModal('');
            setStateDateModal('');
            setStateError("error__none");
        } else {
            setStateError("error__animation");
        }
    }
    const inputDate = (e) => {
        console.log(e.target.value);
        setStateDateModal(e.target.value);
    }
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() < 9? '0' + (today.getMonth() + 1):today.getMonth() + 1;
    let year = today.getFullYear();
    let dateToday = `${year}-${month}-${day}`;
    return(
        <div className={`modal modal__${stateModal}`}>
            <form onSubmit={validateInput} className="modal__window">
                <img className="modal__imagetask" src={addTaskImage} alt="add task"></img>
                <label className="modal__window--label" from="taskName">Agregar nueva tarea</label>
                <textarea className="modal__window--text"
                    name="taskName"
                    type='text'
                    autoFocus
                    placeholder="Nombre de tarea"
                    value={stateMessageModal}
                    onInput={searchInput}>
                </textarea>
                <label className="modal__window--labeldate" from="dateTaskEnd">Fecha Limite</label>
                <input name="dateTaskEnd" className="modal__window--date" type="date" min={dateToday} onChange={inputDate} value={stateDateModal}></input>
                <label className={`modal__window--error ${stateError}`}>{messageError}</label>
                <button type="button" className="modal__window--buttonClose"
                    onMouseDown={() => closeModal()}
                >Cancelar</button>
                <button type="submit" className="modal__window--buttonAdd"
                >Agregar</button>
            </form>
        </div>
    );
}

export { AddTaskForm };