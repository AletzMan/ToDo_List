import React from "react";
import "./TodoButton.css"

function TodoButton({ onLoadModal, loading, setTypeModal }) {


    return (
        <button className="todoButton__button"
            onClick={() => {
                onLoadModal(true)
                setTypeModal(1)
            }/*addTask('Aqui se abrira un modal')*/}
            disabled={loading}
        >+</button>
    );
}

export { TodoButton }; 