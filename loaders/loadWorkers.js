import React, {useEffect, useState} from "react";


export default function Workers() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getWorkers`;
            const response = await fetch(apiUrlEndpoint);

            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.workers)
            }
        }

        getPageData().catch();
    }, []);
    return (
        dataResponse
    )
}