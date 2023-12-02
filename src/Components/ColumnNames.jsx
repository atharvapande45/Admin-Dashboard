import React from "react";
import "../Styles/ColumnNames.css";

export default function ColumnNames() {
    return (
        <>
            <div className="column-name">
                <div className="column-name-item">
                    <input type="checkbox" className="checkbox" />
                </div>
                <div className="column-name-item">
                    <p>Name</p>
                </div>
                <div className="column-name-item">
                    <p>Email</p>
                </div>
                <div className="column-name-item">
                    <p>role</p>
                </div>
                <div className="column-name-item">
                    <p>actions</p>
                </div>
            </div>
        </>
    );
}
