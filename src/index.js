import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ToastProvider config={{
        position: "top-center",
        duration: 1500
    }} >
        <App />
    </ToastProvider>
);
