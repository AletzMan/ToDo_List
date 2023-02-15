import React from "react";
import "./ButtonAdd.css"

function ButtonAdd({ onLoadModal, loading, setTypeModal }) {


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

export { ButtonAdd }; 