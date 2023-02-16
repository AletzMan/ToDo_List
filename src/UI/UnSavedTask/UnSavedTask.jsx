import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../UI/UnSavedTask/UnSavedTask.css"

function UnSavedTask({viewModal, setViewModal}) {
    const [ saved, setSaved ] = useState(false);
    const navigate = useNavigate();

    const evaluateSaved = (value) => {
        if(value) {
            setSaved(true);
            setViewModal(false);
            navigate(-1);
        } else {
            setSaved(false);
            setViewModal(false);
        }
    }

    return(
        <div className={`modal modal__${viewModal}`}>
            <div className="modal__container">
                <h1 className="modal__title">{'Unsaved changes'}</h1>
                <p className="modal__message">{'Do you want to exit without saving changes?'}</p>
                <button className="modal__button modal__button--ok" onClick={() => evaluateSaved(true)}>Yes</button>
                <button className="modal__button modal__button--cancel" onClick={() => evaluateSaved(false)}>No</button>
            </div>
        </div>
    )
}

export { UnSavedTask }