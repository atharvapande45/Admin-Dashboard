import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";

export default function Home() {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [selected, setSelected] = useState([]);

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

    const deleteSelectedData = () => {
        setData(data.filter((e) => !selected.includes(e.id)));

        setSelected([]);
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
            <Header />
            <Table
                data={data}
                pageNo={pageNo}
                setData={setData}
                setSelected={setSelected}
            />
            <Footer
                pageNo={pageNo}
                setPageNo={setPageNo}
                pages={Math.ceil(data.length / 10)}
                selected={selected.length}
                total={
                    pageNo * 10 <= data.length
                        ? 10
                        : data.length - (pageNo - 1) * 10
                }
                deleteSelectedData={deleteSelectedData}
            />
        </>
    );
}
