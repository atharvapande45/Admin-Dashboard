import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";

export default function Home() {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);

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

    return (
        <>
            <Header />
            <Table data={data} pageNo={pageNo} setData={setData} />
            <Footer
                pageNo={pageNo}
                setPageNo={setPageNo}
                pages={Math.ceil(data.length / 10)}
            />
        </>
    );
}
