import React from "react";
import './ChangeAlert.css'
import { useStorageListener } from "./useStorageListener";



function ChangeAlert({synchronize}) {
    const { show, toggleShow } = useStorageListener(synchronize);
    if (show) {
        return (
            <div className="alert">
                <div className="alert__container">
                    <p className="alert__message">Se realizaron cambios en las tareas, necesita actualizar la pagina.</p>
                    <button className="alert__button"
                        onClick={() => {
                            toggleShow(false)
                        }}
                    >Refresh
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}



export { ChangeAlert };