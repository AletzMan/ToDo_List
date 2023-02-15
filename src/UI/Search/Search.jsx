import React from "react";
import "./Search.css";
import searchIcon from "../../assets/search.svg";

function Search({ stateSearch, setStateSearch, loading }) {
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


export { Search };