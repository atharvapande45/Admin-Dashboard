import React from "react";
import "../Styles/TableRow.css";
import { useState, useEffect } from "react";
import {
    AiTwotoneEdit,
    AiTwotoneDelete,
    AiOutlineCheckSquare,
    AiOutlineCloseCircle,
} from "react-icons/ai";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export default function TableRow({
    id,
    name,
    email,
    role,
    setSelected,
    selectAll,
    deleteData,
    editData,
}) {
    const [isChecked, setChecked] = useState(selectAll);
    const [edit, setEdit] = useState(false);
    const [info, setInfo] = useState({ name: name, email: email, role: role });

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

    const handleClick = () => {
        setEdit(true);
    };

    const handleEdit = () => {
        setEdit(false);
        editData(id, info.name, info.email, info.role);
    };

    const handleClose = () => {
        setEdit(false);
        setInfo({
            name: name,
            email: email,
            role: role,
        });
    };

    return (
        <>
            <div className={`table-row ${isChecked && "gray-row"}`}>
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
                    {edit ? (
                        <input
                            value={info.name}
                            onChange={(e) => {
                                setInfo({ ...info, name: e.target.value });
                            }}
                            maxLength={30}
                        />
                    ) : (
                        <p>{name}</p>
                    )}
                </div>
                <div className="row-item">
                    {edit ? (
                        <input
                            value={info.email}
                            onChange={(e) => {
                                setInfo({ ...info, email: e.target.value });
                            }}
                            maxLength={30}
                        />
                    ) : (
                        <p>{email}</p>
                    )}
                </div>
                <div className="row-item">
                    {edit ? (
                        <input
                            value={info.role}
                            onChange={(e) => {
                                setInfo({ ...info, role: e.target.value });
                            }}
                            maxLength={30}
                        />
                    ) : (
                        <p>{role}</p>
                    )}
                </div>
                <div className="row-item">
                    {edit ? (
                        <Tooltip
                            title="Submit"
                            position="bottom"
                            trigger="mouseenter"
                        >
                            <AiOutlineCheckSquare
                                className="icon-check"
                                onClick={() => {
                                    handleEdit();
                                }}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip
                            title="Edit"
                            position="bottom"
                            trigger="mouseenter"
                        >
                            <AiTwotoneEdit
                                className="icon-edit"
                                onClick={() => {
                                    handleClick();
                                }}
                            />
                        </Tooltip>
                    )}
                    {edit ? (
                        <Tooltip
                            title="Close"
                            position="bottom"
                            trigger="mouseenter"
                        >
                            <AiOutlineCloseCircle
                                className="icon-close"
                                onClick={() => {
                                    handleClose();
                                }}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip
                            title="Delete"
                            position="bottom"
                            trigger="mouseenter"
                        >
                            <AiTwotoneDelete
                                className="icon-delete"
                                onClick={() => deleteData(id)}
                            />
                        </Tooltip>
                    )}
                </div>
            </div>
        </>
    );
}
