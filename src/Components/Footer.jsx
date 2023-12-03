import React from "react";
import "../Styles/Footer.css";

export default function Footer({
    pageNo,
    setPageNo,
    pages,
    selected,
    total,
    deleteSelectedData,
    setSelected,
    setSelectAll,
}) {
    const arrayRange = Array.from(
        { length: (pages - 1) / 1 + 1 },
        (value, index) => 1 + index
    );

    const changePage = (e) => {
        setPageNo(e);
        setSelected([]);
        setSelectAll(false);
    };

    return (
        <div className="footer">
            <div className="selections">
                <p className="selected">
                    {selected}/{total} selected
                </p>
                <button
                    onClick={() => {
                        deleteSelectedData();
                    }}
                >
                    Delete Selections
                </button>
            </div>

            <div className="page-numbers">
                <p>
                    Page {pageNo}/{pages}
                </p>
                <button className="button">{"<<"}</button>
                <button className="button">{"<"}</button>
                {arrayRange.map((e) => (
                    <button
                        key={e}
                        className="button"
                        onClick={() => {
                            changePage(e);
                        }}
                    >
                        {e}
                    </button>
                ))}
                <button className="button">{"<<"}</button>
                <button className="button">{"<"}</button>
            </div>
        </div>
    );
}
