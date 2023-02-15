import React from "react";
import "../../UI/UnSavedTask/UnSavedTask.css"

function UnSavedTask({viewModal, setViewModal}) {

    return(
        <div className={`modal modal__${viewModal}`}>
            <div className="modal__container">
                <h1 className="modal__title">{'Unsaved changes'}</h1>
                <p className="modal__message">{'Do you want to exit without saving changes?'}</p>
                <button className="modal__button modal__button--ok">Yes</button>
                <button className="modal__button modal__button--cancel" onClick={() => setViewModal(false)}>No</button>
            </div>
        </div>
    )
}

export { UnSavedTask }