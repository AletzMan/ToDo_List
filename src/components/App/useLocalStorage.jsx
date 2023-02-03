import React, { useState } from "react";

function useLocalStorage(itemName, initValue) {
    const [synchronizedItem, setSynchronizedItem] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initValue);
    React.useEffect(() => {

        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initValue));
                    parsedItem = initValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setLoading(false);
                setSynchronizedItem(true);
            } catch(error) {
                setError(error);
            }
        }, 1500);
    }, [synchronizedItem])


    const synchronizeItem = () => {
        setLoading(true);
        setSynchronizedItem(false);
    }

    const saveItem = (newItem) => {
        try {
            const stringifyItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifyItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }
    return {
        item,
        saveItem,
        loading,
        error,
        synchronizeItem
    };

}

export { useLocalStorage };