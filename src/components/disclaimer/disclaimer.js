import { useState, useEffect } from "react";
import "./disclaimer.css";

const Disclaimer = () => {
    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        let fetched = false;
        
        try {
            fetched = JSON.parse(localStorage.getItem("visible").toLowerCase());
        } catch(e) {
            fetched = true
        }

        setVisible(fetched)
    }, [])

    const closeDisclaimer = () => {
        localStorage.setItem("visible", "false");
        setVisible(false)
    }

    return visible 
        ? (
            <div className="disclaimer flex justify-between align-center">
                <span>Neuromates is not affiliated with a medical organization. </span>
                <i className="fas fa-times" onClick={ closeDisclaimer }></i>
            </div>
        )
        : null
}

export default Disclaimer