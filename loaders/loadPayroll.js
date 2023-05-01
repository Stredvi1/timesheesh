import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/recordCard";
import {useSession} from "next-auth/react";



export default function load() {

    const [dataResponse, setDataResponse] = useState([]);
    const {data: session} = useSession();

    const id = session.id;

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

            setDataResponse(res.records);
        }

        getPageData();
    }, [id, router.isReady]);
    return (
        <>
            {dataResponse?.map((payroll) => {
                    return (

                        <Card
                            key={payroll.id}
                            id={payroll.id}
                            fullName={payroll.fullName}
                            amount={payroll.amount}
                            bankAccount={payroll.bankAccount}
                        />
                    )
                }
            )}
        </>
    )
}