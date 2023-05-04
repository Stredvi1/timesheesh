import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Card from "../components/cards/recordCard";
import NoRecord from "../components/nothingHereText";
import {Grid} from "@mui/material";


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

        getPageData().catch();
    }, [id, router.isReady]);

    if (dataResponse.length === 0) {
        return (
            <>
                <NoRecord text={"výkaz"}/>
            </>
        )
    } else {
        return (
            <>
                <Grid
                    container
                    spacing={5}
                    direction={"row"}
                    columns={{xs: 10, md: 10}}
                    sx={{
                        m: '0.8rem'
                    }}>
                    {dataResponse?.map((record) => {
                            return (
                                <Grid item xs={2} md={2}>
                                    <Card
                                        key={record.id}
                                        id={record.id}
                                        activityID={record.activityID}
                                        date={record.date}
                                        workingTime={record.workingTime}
                                        text={record.text}
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