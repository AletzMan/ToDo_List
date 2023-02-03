import React from "react";
import "./TodoFooter.css";

function TodoFooter({ children, loading }) {
    return (
        <footer className={`footer`}>
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))
            }
        </footer>
    );
}

export { TodoFooter };