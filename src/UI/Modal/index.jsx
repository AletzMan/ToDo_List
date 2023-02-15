import ReactDOM from 'react-dom';
import "./Modal.css";

function Modal({children}) {    
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}

export { Modal };