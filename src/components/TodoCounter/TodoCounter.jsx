import React from "react";
import { AppContext } from "../TaskContext";
import './TodoCounter.css';
/*
const estilos = {
    color: '#AABB33',
    backgroundColor: '#17171744',
    padding: '0.5rem'

     style={estilos}
};
*/

 
function TodoCounter() {    
    const { totalTasks, completedTasks } = React.useContext(AppContext);

    let porcentageTasksCompleted = (100 / totalTasks) * completedTasks;
    if(totalTasks === 0) {
        porcentageTasksCompleted = 0;
    }
    let colorTaskPorcentageTask = ['#ff0000', '#ff9900', '#fbff00', '#91ff00', '#15ff00']
    let colorNum = 0;
    if(porcentageTasksCompleted < 21) {
        colorNum = 0;
    } else if (porcentageTasksCompleted > 20 && porcentageTasksCompleted < 41){
        colorNum = 1;
    } else if (porcentageTasksCompleted > 40 && porcentageTasksCompleted < 61){
        colorNum = 2;
    } else if (porcentageTasksCompleted > 60 && porcentageTasksCompleted < 81){
        colorNum = 3;
    } else if (porcentageTasksCompleted > 80 && porcentageTasksCompleted < 101){
        colorNum = 4;
    }
    return (
        <header className="header">
            <h2 className="header__title">Lista de Pendientes</h2>
            <div className="header__tasks">
                <div className="header__tasks--counter" style={{width: `${porcentageTasksCompleted}%`, backgroundColor: colorTaskPorcentageTask[colorNum]} }></div>
                <span className="header__tasks--task">{completedTasks} de {totalTasks} tareas completadas</span>
                <span  className="header__tasks--porcentage">{Math.round(porcentageTasksCompleted)}%</span>
            </div>
        </header>
    );
}


export { TodoCounter };