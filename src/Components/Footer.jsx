import React from "react";
import "../Styles/Footer.css";

export default function Footer({ pageNo, setPageNo, pages }) {
    const arrayRange = Array.from(
        { length: (pages - 1) / 1 + 1 },
        (value, index) => 1 + index
    );

    const changePage = (e) => {
        setPageNo(e);
    };

    return (
        <div className="footer">
            <p className="selected">0/10 selected</p>

            <div className="page-numbers">
                <p>
                    Page {pageNo}/{pages}
                </p>
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
            </div>
        </div>
    );
}
