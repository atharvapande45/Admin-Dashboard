import React from "react";
import "../Styles/TableRow.css";

export default function TableRow({ id, name, email, role }) {
    return (
        <>
            <div className="table-row">
                <div className="row-item">
                    <input type="checkbox" />
                </div>
                <div className="row-item">
                    <p>{name}</p>
                </div>
                <div className="row-item">
                    <p>{email}</p>
                </div>
                <div className="row-item">
                    <p>{role}</p>
                </div>
                <div className="row-item">
                    <p>actions</p>
                </div>
            </div>
        </>
    );
}
