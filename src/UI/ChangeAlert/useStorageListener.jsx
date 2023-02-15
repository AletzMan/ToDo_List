import React, { useState } from "react";

function useStorageListener(synchronize) {
    
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'TASKS_V1') {
            console.log('Hubo cambios')
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        synchronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow
    }
};


export { useStorageListener };