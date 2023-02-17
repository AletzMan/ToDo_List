import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonAdd.css"

function ButtonAdd({loading}) {
  
    
    return (
        <NavLink className="todoButton__button"
            to={"/new"}
            disabled={loading}>
            <svg className="todoButton__button--img" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 612 612">
                <path d="M554.625,248.625h-191.25V57.375C363.375,25.685,337.69,0,306,0c-31.69,0-57.375,25.685-57.375,57.375v191.25H57.375
				C25.685,248.625,0,274.31,0,306c0,31.69,25.685,57.375,57.375,57.375h191.25v191.25C248.625,586.315,274.31,612,306,612
				c31.69,0,57.375-25.685,57.375-57.375v-191.25h191.25C586.315,363.375,612,337.69,612,306
				C612,274.31,586.315,248.625,554.625,248.625z"/>
            </svg>
        </NavLink>
    );
}

export { ButtonAdd }; 