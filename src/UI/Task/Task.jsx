import React from "react";
import "./Task.css";
import deleteTaskIcon from "../../assets/delete.svg";
import check from "../../assets/check.svg";
import nocheck from "../../assets/no-check.svg";
import information from "../../assets/information.svg";
import noneTask from "../../assets/nonetask.svg";
import pending from "../../assets/pending.svg";
import editTask from "../../assets/edit.svg";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../components/App/useTodos";

function Task({ id, text, statusTask, date, taskComplete, taskDelete, dateToday }) {
    const navigate = useNavigate();

    

    let imageDelete;
    let imageTask = noneTask;
    let tagDate = <p className="task__date">Fecha limite: <span className="task__date--span">{date}</span></p>;
    let inTime = date < dateToday? false : true;
    let statusTaskAndIcon;
    if(statusTask === 'completed') {
        statusTaskAndIcon = { text: "completed", icon: check };
    } else if(statusTask === 'pending') {
        statusTaskAndIcon = { text: "pending", icon: pending };
    } else if(statusTask === 'overdue') {
        statusTaskAndIcon = { text: "overdue", icon: nocheck };
    } else if(statusTask === 'noTask') {
        statusTaskAndIcon = { text: "noTask", icon: information }
    } else if(statusTask === 'noFound') {
        statusTaskAndIcon = { text: "noFound", icon: noneTask }
    }
    
    if (statusTask !== 'noTask' && statusTask !== 'noFound') {
        imageDelete = (
            <>
                <button className="task__delete" onClick={taskDelete}>
                    <svg className="task__delete--img" x="0px" y="0px" viewBox="0 0 100 100">
                        <path d="M27.4,76.6c0,4.6,3.8,8.4,8.5,8.4h28.3c4.7,0,8.5-3.8,8.5-8.4l5.7-44.8H21.7L27.4,76.6z M58.5,40.2h5.7v36.4 h-5.7V40.2z M47.2,40.2h5.7v36.4h-5.7V40.2z M35.9,40.2h5.7v36.4h-5.7V40.2z M76.9,20.6H58.5c0,0-1.3-5.6-2.8-5.6H44.3 c-1.6,0-2.8,5.6-2.8,5.6H23.1c-2.3,0-4.2,1.9-4.2,4.2s0,4.2,0,4.2h62.2c0,0,0-1.9,0-4.2S79.2,20.6,76.9,20.6z"/>
                    </svg>
                </button>
                <button className="task__edit" onClick={() => navigate(`/edit/${id}`)}>
                    <svg className="task__edit--img" x="0px" y="0px" viewBox="0 0 100 100">
                        <path d="M33,53.2l14.4,14.5l30.2-30.5L63.2,22.7L33,53.2z M66.6,33.8c1,1,1,2.6,0,3.7L49.1,55.1 c-0.5,0.5-1.2,0.8-1.8,0.8c-0.7,0-1.3-0.3-1.8-0.8c-1-1-1-2.6,0-3.7L63,33.8C64,32.7,65.6,32.7,66.6,33.8z" />
                        <polygon points="26.4,74.1 42.4,70 30.7,58.2" />
                        <path d="M83.4,23.7l-6.8-6.9c-2-2-5.5-2-7.6,0l-2.2,2.2l14.4,14.5l2.2-2.2C85.5,29.2,85.5,25.8,83.4,23.7z" />
                        <path d="M77,85.3H16.7c-1.5,0-2.6-1.2-2.6-2.7V18.1c0-1.5,1.2-2.7,2.6-2.7h40.5c1.5,0,2.6,1.2,2.6,2.7 c0,1.5-1.2,2.7-2.6,2.7H19.3V80H77c2.1,0,3.7-1.7,3.7-3.8V42.9c0-1.5,1.2-2.7,2.6-2.7c1.5,0,2.6,1.2,2.6,2.7v33.3 C86,81.2,82,85.3,77,85.3z" />
                    </svg>
                </button>
            </>
        )
    } else {
        if (statusTask === "noTask") {
            imageTask = noneTask;
            tagDate = '';
        } else {
            imageTask = information;
            tagDate = '';
        }
    }
    return (

        <li className={`task__item task__item--${statusTaskAndIcon.text}`}>
            <img alt="icon check todo" src={statusTaskAndIcon.icon} className="task--check"
                onClick={() => taskComplete(id)}
            />
            <p className={`task__name task__name--${statusTaskAndIcon.text}`} name={text}>{text}</p>
            {tagDate}
            {imageDelete}
        </li>
    );
}
export { Task };