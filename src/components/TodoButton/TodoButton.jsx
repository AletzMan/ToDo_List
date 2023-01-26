import React from "react";
import "./TodoButton.css"

function TodoButton({ onLoadModal}) {

  
    return (
        <button className="todoButton__button"
            onClick={() => onLoadModal(true)/*addTask('Aqui se abrira un modal')*/}
        >+</button>
    );
}

export { TodoButton }; 