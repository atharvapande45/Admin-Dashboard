import { FaSearch } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "../Styles/Header.css";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export default function Header({
    setSearchString,
    filterOnSearch,
    deleteSelectedData,
}) {
    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleClick = () => {
        filterOnSearch();
    };

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            handleClick();
        }
    };

    return (
        <>
            <div className="header">
                <div className="form">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => handleChange(e)}
                        onKeyDown={(e) => handleEnter(e)}
                    />
                    <Tooltip
                        title="Search"
                        position="bottom"
                        trigger="mouseenter"
                    >
                        <FaSearch
                            className="search-icon"
                            onClick={() => {
                                handleClick();
                            }}
                        />
                    </Tooltip>
                </div>
                <Tooltip
                    title="Delete selections"
                    position="bottom"
                    trigger="mouseenter"
                >
                    <AiFillDelete
                        className="delete-icon"
                        onClick={deleteSelectedData}
                    />
                </Tooltip>
            </div>
        </>
    );
}
