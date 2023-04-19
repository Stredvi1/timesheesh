import React, {useEffect, useState} from "react";


export default function UserTypes() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getUserTypes`;
            const response = await fetch(apiUrlEndpoint);

            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.types)
            }
        }

        getPageData().catch();
    }, []);
    return (
        dataResponse
    )
}