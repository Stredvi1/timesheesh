import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/cards/payrollCard";
import {useSession} from "next-auth/react";
import {Box, Typography} from "@mui/material";
import currency from "../utils/formatters/currencyFormatter";
import time from "../utils/formatters/worktimeFormatter";
import NoPayroll from "@/components/nothingHereText";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";


export default function load() {

    const [dataResponse, setDataResponse] = useState([]);

    const {data: session, status} = useSession();

    const id = session?.user.id;

    useEffect(() => {
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

            if (response.ok) {
                const res = await response.json();
                setDataResponse(res.payroll);
            }

        }

        getPageData().catch();
    }, []);

    if (dataResponse.length === 0) {
        return (
            <>
                <NoPayroll text={"výplatu"}/>
            </>
        )
    } else {
        return (
            <>
                <Box
                width={"20%"}
                sx={{
                    m:'2rem'
                }}>
                {dataResponse?.map((payroll) => {
                        return (
                            <Card
                                key={payroll.tUserID}
                                id={payroll.tUserID}
                                name={payroll.fullName}
                                amount={payroll.amount}
                                bankAccount={payroll.bankAccount}
                                worktime={payroll.worktime}
                            />
                        )
                    }
                )}
                </Box>
            </>
        )
    }

}
