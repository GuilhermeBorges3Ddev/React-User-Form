import React from 'react';
import { FiUser } from "react-icons/fi";
import "../styles/App.css";

export default function AppHeader() {
    return (
        <div className="d-flex justify-content-center align-items-center border-header">
            <h1 className="text-white">
                <FiUser className="d-flex align-self-center ml-50 text-white"/> 
                <br></br>
                REACT-USER-FORM
            </h1>
        </div>
    )
}
