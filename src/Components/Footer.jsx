import React from "react";
import "../Styles/Footer.css";

export default function Footer({ pages }) {
    pages = 15;

    const arrayRange = Array.from(
        { length: (pages - 1) / 1 + 1 },
        (value, index) => 1 + index
    );

    return (
        <div className="footer">
            <p className="selected">0/10 selected</p>

            <div className="page-numbers">
                <p>Page 1/10</p>
                {arrayRange.map((e) => (
                    <button key={e} className="button">
                        {e}
                    </button>
                ))}
            </div>
        </div>
    );
}
