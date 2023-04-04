import React, {useEffect, useState} from "react";
import {MenuItem} from "@mui/material";


export default function UserTypes() {
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getUserTypes`;
            const response = await fetch(apiUrlEndpoint);

            if (response.ok) {
                const res = await response.json();
                setdataResponse(res.types)
                console.log(res)
            }
        }

        getPageData().catch();
    }, []);
    return (
        dataResponse
    )
}