import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Typography, Box, Stack} from "@mui/material";
import styles from "../styles/Home.module.css";
import currency from "../utils/formatters/currencyFormatter";
import time from "../utils/formatters/worktimeFormatter";
import Progress from "@/components/progressCircle";
import percentage from "@/utils/percentage";


export default function load() {
    const router = useRouter();
    const {id} = router.query;

    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `/api/getActivityData`;
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
                setDataResponse(res.activity);
            }
        }

        getPageData().catch();
    }, [id, router.isReady]);
    return (
        <>

            {dataResponse?.map((activity) => {
                    return (

                        <Stack
                            direction={"row"}
                            className={styles.upperBox}
                            key={activity.id}
                            alignItems={"center"}
                            sx={{
                                position: 'relative'
                            }}>
                            <Box>

                                <Typography variant="overline">{activity.projectName}</Typography>
                                <Typography variant="h3">{activity.name}</Typography>

                                <Typography><strong>Přiřazeno: </strong> {activity.fullName}</Typography>
                                <Typography><strong>Časofond: </strong> {time(activity.timefund)}</Typography>
                                <Typography><strong>Odpracováno: </strong> {time(activity.workingTime)}</Typography>
                                <Typography><strong>Hodinová sazba: </strong> {currency(activity.hourRate)}</Typography>
                                <Typography><i>{activity.note}</i></Typography>


                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    right: '5rem'
                                }}>
                                <Progress value={percentage(activity.timefund, activity.workingTime)} size={"10rem"} color={"primary"} textColor={"text.contrast"}/>

                            </Box>
                        </Stack>
                    )
                }
            )}
        </>
    )
}