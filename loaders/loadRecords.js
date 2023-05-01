import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/recordCard";
import time from "../formatters/worktimeFormatter";



export default function load() {
    const router = useRouter();
    const {id} = router.query;


    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `/api/getRecords`;
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

        console.log("Record ", id);

        getPageData();
    }, [id, router.isReady]);
    return (
        <>
            {dataResponse?.map((record) => {
                    return (

                        <Card
                            key={record.id}
                            id={record.id}
                            activityID={record.activityID}
                            date={record.date}
                            workingTime={record.workingTime}
                            text={record.text}
                        />
                    )
                }
            )}
        </>
    )
}