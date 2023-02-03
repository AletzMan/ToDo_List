import React from "react";
import "./TodoSearch.css";
import searchIcon from "../../assets/search.svg";

function TodoSearch({ stateSearch, setStateSearch, loading }) {
    const searchInput = (event) => {
        setStateSearch(event.target.value);
    }

    return (
        <div className="search__container">
            <input name="search" className="search__input" placeholder="Introduce tarea a buscar"
                value={stateSearch}
                onInput={searchInput}
                disabled={loading}
            />
            <img className="search__image" src={searchIcon} alt="icon search" />
        </div>
    );
}


export { TodoSearch };