import { useEffect, useState } from "react";
import ColumnNames from "./ColumnNames";
import TableRow from "./TableRow";
import "../Styles/Table.css";

export default function Table({ data, pageNo, setSelected }) {
    const [table, setTable] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        changeTable();
    }, [pageNo, data]);

    const changeTable = () => {
        let tempArray = data.slice((pageNo - 1) * 10, (pageNo - 1) * 10 + 10);
        setTable(tempArray);
    };

    return (
        <>
            <div className="table">
                <ColumnNames
                    setSelectAll={setSelectAll}
                    setSelected={setSelected}
                    table={table}
                />

                {table.map((e) => {
                    return (
                        <TableRow
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            email={e.email}
                            role={e.role}
                            setSelected={setSelected}
                            selectAll={selectAll}
                        />
                    );
                })}
            </div>
        </>
    );
}
