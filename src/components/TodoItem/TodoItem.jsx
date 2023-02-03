import React from "react";
import "./TodoItem.css";
import deleteTaskIcon from "../../assets/delete.png";
import check from "../../assets/check.svg";
import nocheck from "../../assets/no-check.svg";
import information from "../../assets/information.svg";
import noneTask from "../../assets/nonetask.svg";

function TodoItem({ text, completed, date, taskComplete, taskDelete }) {
    let imageDelete;
    let imageTask = noneTask;
    let tagDate = <p className="todoItem__date">Fecha limite: <span>{date}</span></p>;

    if (completed !== undefined) {
        imageDelete = <img alt="icon delete todo" src={deleteTaskIcon} className="todoItem--delete" onClick={taskDelete} />;
    } else {
        if (text === "No tienes tareas agregadas") {
            imageTask = noneTask;
            tagDate =  '';
        } else {
            imageTask = information;
            tagDate =  '';
        }
    }
    return (

        <li className={`todoItem__item todoItem__item--${completed}`}>
            <img alt="icon check todo" src={completed ? check : completed === undefined ? imageTask : nocheck} className="todoItem--check"
                onClick={taskComplete}
            />
            <p className={`todoItem--name todo__name--${completed}`} name={text}>{text}</p>
            {tagDate}
            {imageDelete} 
        </li>
    );
}
export { TodoItem };