import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFilter } from "../../components/Hooks/UseFilter";
import "./Filter.css"

function Filter({ setStateFilter,  loading }) {
    const [activePanel, setActivePanel] = useState(false);
    const { state, updateState } = useFilter();

   
    useEffect(() => {
        setStateFilter(state);
    },[state])

    return (
        <div className={`filters filters__${loading}`}>
            <button className={`filters__button filters__button--${activePanel}`} onClick={() => setActivePanel(!activePanel)}>
                <svg className="filters__svg" width="32" height="32" viewBox="0 0 32 32" >
                    <path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                    <path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z" />
                    <path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
                    <path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
                    <path d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z" />
                    <path d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z" />
                    <path d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z" />
                    <path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z" />
                    <path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                </svg>
            </button>
            <div className="filters__panel">
                <h1 className="filters__title">Flitros de Busqueda</h1>
                <label htmlFor="completed" className="filters__label">Completadas</label>
                <label htmlFor="pending" className="filters__label">Pendientes</label>
                <label htmlFor="overdue " className="filters__label">Atrasadas</label>
                <label htmlFor="fordate" className="filters__label">Fecha</label>
                <input onChange={(e) => updateState(0, e.target.checked)} defaultChecked={state.completed} name="filter" type="checkbox" className="filters__checkbox" />
                <input onChange={(e) => updateState(1, e.target.checked)} defaultChecked={state.pending} name="filter" type="checkbox" className="filters__checkbox" />
                <input onChange={(e) => updateState(2, e.target.checked)} defaultChecked={state.overdue} name="filter" id="overdue" type="checkbox" className="filters__checkbox" />
                <input onChange={(e) => updateState(3, e.target.checked)} defaultChecked={state.date} name="fordate" id="fordate" type="checkbox" className="filters__checkbox" />
            </div>
        </div>
    )
}

export { Filter }