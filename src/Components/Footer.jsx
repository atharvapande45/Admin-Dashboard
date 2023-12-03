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
            </div>

            <div className="page-numbers">
                <p>
                    Page {pageNo}/{pages}
                </p>
                <button
                    className="first-page"
                    onClick={() => {
                        setPageNo(1);
                    }}
                    disabled={pageNo == 1}
                >
                    {"<<"}
                </button>
                <button
                    className="previous-page"
                    onClick={() => {
                        setPageNo(pageNo - 1);
                    }}
                    disabled={pageNo == 1}
                >
                    {"<"}
                </button>
                {arrayRange.map((e) => (
                    <button
                        key={e}
                        className="button-no"
                        onClick={() => {
                            changePage(e);
                        }}
                        disabled={e == pageNo}
                    >
                        {e}
                    </button>
                ))}
                <button
                    className="next-page"
                    onClick={() => {
                        setPageNo(pageNo + 1);
                    }}
                    disabled={pageNo == pages}
                >
                    {">"}
                </button>
                <button
                    className="last-page"
                    onClick={() => {
                        setPageNo(pages);
                    }}
                    disabled={pageNo == pages}
                >
                    {">>"}
                </button>
            </div>
        </div>
    );
}
