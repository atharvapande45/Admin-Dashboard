import { useEffect, useState } from "react";
import "../Styles/ColumnNames.css";

export default function ColumnNames({ setSelectAll, selectAll }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setSelectAll(isChecked);
    }, [isChecked]);

    useEffect(() => {
        setIsChecked(selectAll);
    }, [selectAll]);

    return (
        <>
            <div className="column-name">
                <div className="column-name-item">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={() => handleChange()}
                    />
                </div>
                <div className="column-name-item">
                    <p>NAME</p>
                </div>
                <div className="column-name-item">
                    <p>E-MAIL</p>
                </div>
                <div className="column-name-item">
                    <p>ROLE</p>
                </div>
                <div className="column-name-item">
                    <p>ACTIONS</p>
                </div>
            </div>
        </>
    );
}
