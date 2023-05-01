import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/activityCard";
import time from "../formatters/worktimeFormatter";
import {Stack, Typography} from "@mui/material";
import NoActivity from "../components/nothingHereText";


export default function load() {
    const router = useRouter();
    const {id} = router.query;


    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `/api/getActivities`;
            const postData = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.activities);
        }

        console.log("Activity ", id);
        console.log(dataResponse);

        getPageData();
    }, [id, router.isReady]);

    if (dataResponse.length === 0) {
        return (
            <>
            <NoActivity text={"aktivitu"}/>
            </>
        )
    } else {
        return (
            <>
                <Stack flexWrap spacing={4} sx={{p: 6}} direction="row">
                    {dataResponse?.map((activity) => {
                            return (

                                <Card
                                    key={activity.id}
                                    id={activity.id}
                                    projectID={activity.projectID}
                                    name={activity.name}
                                    timefund={activity.timefund}
                                    workingTime={activity.workingTime}
                                    fullName={activity.fullName}
                                />


                            )
                        }
                    )}
                </Stack>
            </>
        )
    }
}