import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/recordCard";
import {useSession} from "next-auth/react";
import {Typography} from "@mui/material";
import currency from "../formatters/currencyFormatter";
import time from "../formatters/worktimeFormatter";


export default function load() {

    const [dataResponse, setDataResponse] = useState([]);
    const {data: session} = useSession();

    // const id = session.id;
    //TODO: edit
    const id = 29;

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `/api/getPayroll`;
            const postData = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.payroll);
        }

        getPageData();
    }, [id, router.isReady]);
    return (
        <>
            {dataResponse?.map((payroll) => (
                    <>
                        <Typography><strong>{payroll.fullName}</strong></Typography>
                        <Typography><strong>Částka: </strong>{currency(payroll.amount)}</Typography>
                        <Typography><strong>Bankovní účet: </strong>{payroll.bankAccount}</Typography>
                    </>
                )
            )}
        </>
    )
}