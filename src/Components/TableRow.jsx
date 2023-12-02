import React from "react";
import "../Styles/TableRow.css";
import { useState, useEffect } from "react";

export default function TableRow({
    id,
    name,
    email,
    role,
    setSelected,
    selectAll,
}) {
    const [isChecked, setChecked] = useState(selectAll);

    const handleCheckChange = (id) => {
        setChecked(!isChecked);
    };

    useEffect(() => {
        setSelected((selected) => {
            if (isChecked) {
                return [...selected, id];
            } else {
                return selected.filter((e) => e !== id);
            }
        });
    }, [isChecked]);

    useEffect(() => {
        setChecked(selectAll);
    }, [selectAll]);

    return (
        <>
            <div className="table-row">
                <div className="row-item">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={() => {
                            handleCheckChange(id);
                        }}
                    />
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
