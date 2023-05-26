import React, {useEffect, useState} from "react";


export default function Clients() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getWatchers`;
            const response = await fetch(apiUrlEndpoint);



            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.watchers)

            }
        }

        getPageData().catch();
    }, []);
    return (
        dataResponse
    )
}