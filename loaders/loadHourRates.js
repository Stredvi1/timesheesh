import React, {useEffect, useState} from "react";


export default function HourRates() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getHourRates`;
            const response = await fetch(apiUrlEndpoint);

            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.hourRates)
            }
        }

        getPageData().catch();
    }, []);
    return (
        dataResponse
    )
}