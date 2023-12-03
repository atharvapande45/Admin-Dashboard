import { useEffect, useState } from "react";
import ColumnNames from "./ColumnNames";
import TableRow from "./TableRow";
import "../Styles/Table.css";

export default function Table({
    data1,
    pageNo,
    setSelected,
    selectAll,
    setSelectAll,
    deleteData,
    editData,
}) {
    const [table, setTable] = useState([]);

    useEffect(() => {
        setTable(data1.slice((pageNo - 1) * 10, (pageNo - 1) * 10 + 10));
    }, [pageNo, data1]);

    return (
        <>
            <div className="table">
                <ColumnNames
                    setSelectAll={setSelectAll}
                    selectAll={selectAll}
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
                            deleteData={deleteData}
                            editData={editData}
                        />
                    );
                })}
            </div>
        </>
    );
}
