import React from 'react';
import { AppUI } from './AppUI';
import { AppProvider } from '../TaskContext';
//import './App.css';




function App() {
    


    return (
        <AppProvider>
            <AppUI />
        </AppProvider>    
     
    );
}

export default App;
