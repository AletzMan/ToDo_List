import React from "react";
import "./TodoSearch.css";
import searchIcon from "../../assets/search.svg";
import { AppContext } from "../TaskContext";

function TodoSearch() {
    const { stateSearch, setStateSearch } = React.useContext(AppContext);

    const searchInput = (event) => {
        setStateSearch(event.target.value);
    }

    return (
        <div className="search__container">
            <input name="search" className="search__input" placeholder="Introduce tarea a buscar"
                value={stateSearch}
                onInput={searchInput}
            />
            <img className="search__image" src={searchIcon} alt="icon search" />
        </div>
    );
}


export { TodoSearch };