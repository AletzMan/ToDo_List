import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../routes/Home/HomePage';
import { NewTaskPage } from '../../routes/NewTask/NewTaskPage';
import { EditTaskPage } from '../../routes/EditTask/EditTaskPage';


function App() {
   return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/new' element={<NewTaskPage/>}/>
            <Route path='/edit/:id' element={<EditTaskPage/>}/>
            <Route path='*' element={<p>Error 404</p>}/> 
        </Routes>
    </BrowserRouter>
    );
}


export { App };
