import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "../Styles/Header.css";

export default function Header() {
    return (
        <>
            <div className="header">
                <form className="form">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                    />
                    <FaSearch />
                </form>

                <AiFillDelete className="delete-icon" />
            </div>
        </>
    );
}
