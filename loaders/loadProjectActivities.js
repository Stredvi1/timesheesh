import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/cards/activityCard";
import time from "../utils/formatters/worktimeFormatter";
import {Grid, Stack, Typography} from "@mui/material";
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
                <Grid
                    container
                    spacing={5}
                    direction={"row"}
                    alignItems="center"
                    columns={{xs: 8, md: 8}}
                    sx={{
                        m: '0.8rem'
                    }}>
                    {dataResponse?.map((activity) => {
                            return (
                                <Grid item xs={3.8}>
                                    <Card
                                        key={activity.id}
                                        id={activity.id}
                                        projectID={activity.projectID}
                                        name={activity.name}
                                        timefund={activity.timefund}
                                        workingTime={activity.workingTime}
                                        fullName={activity.fullName}
                                    />
                                </Grid>
                            )
                        }
                    )}
                </Grid>
            </>
        )
    }
}