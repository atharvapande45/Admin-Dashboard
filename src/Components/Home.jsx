import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";

export default function Home() {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [selected, setSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [data1, setData1] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setData1(data);
        filterOnSearch();
    }, [data]);

    const filterOnSearch = () => {
        setData1(
            data.filter((e) => {
                if (searchString == "") return true;
                else if (
                    e.name.toLowerCase().includes(searchString.toLowerCase())
                )
                    return true;
                else if (
                    e.email.toLowerCase().includes(searchString.toLowerCase())
                )
                    return true;
                else if (
                    e.role.toLowerCase().includes(searchString.toLowerCase())
                )
                    return true;

                return false;
            })
        );
    };

    const deleteSelectedData = () => {
        setData(data.filter((e) => !selected.includes(e.id)));
        setSelected([]);
        setSelectAll(false);
    };

    const deleteData = (id) => {
        setData(
            data.filter((e) => {
                return e.id != id;
            })
        );
    };

    return (
        <>
            <Header
                setSearchString={setSearchString}
                filterOnSearch={filterOnSearch}
            />
            <Table
                data={data1}
                pageNo={pageNo}
                setData={setData}
                setSelected={setSelected}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                deleteData={deleteData}
            />
            <Footer
                pageNo={pageNo}
                setPageNo={setPageNo}
                pages={Math.ceil(data1.length / 10)}
                selected={selected.length}
                total={
                    pageNo * 10 <= data1.length
                        ? 10
                        : data1.length - (pageNo - 1) * 10
                }
                deleteSelectedData={deleteSelectedData}
                setSelected={setSelected}
                setSelectAll={setSelectAll}
            />
        </>
    );
}
