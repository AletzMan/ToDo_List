import React from "react";
import "./TaskList.css"

function TaskList(props) {

    return (
        <section>
            <ul className="todoList">
                {props.children}
            </ul>
        </section>
    );
}

export { TaskList };