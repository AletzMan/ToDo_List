import React from "react";
import "./Footer.css";

function Footer({ children, loading }) {
    return (
        <footer className={`footer footer__${loading}`}>
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))
            }
        </footer>
    );
}

export { Footer };