import React from "react";
import "./TodoFooter.css";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoButton} from "../TodoButton/TodoButton";
import { AppContext } from "../TaskContext";

function TodoFooter() {
    const { onLoadModal } = React.useContext(AppContext);
    return (
        <footer className="todoFooter">        
            <TodoSearch />
            <TodoButton onLoadModal={() => onLoadModal()} />
        </footer>
    );
}

export {TodoFooter};