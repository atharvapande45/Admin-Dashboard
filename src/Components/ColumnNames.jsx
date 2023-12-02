import { useEffect, useState } from "react";
import "../Styles/ColumnNames.css";

export default function ColumnNames({ setSelectAll, setSelected, table }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setSelectAll(isChecked);
    }, [isChecked]);

    return (
        <>
            <div className="column-name">
                <div className="column-name-item">
                    <input
                        type="checkbox"
                        className="checkbox"
                        onChange={() => handleChange()}
                    />
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
