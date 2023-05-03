import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Typography, Box, Stack} from "@mui/material";
import styles from "../styles/Home.module.css";
import date from "../utils/formatters/dateTimeFormatter";
import currency from "../utils/formatters/currencyFormatter";
import Progress from '@/components/progressCircle';
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
            const apiUrlEndpoint = `/api/getProjectData`;
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
                setDataResponse(res.projects);
            }
        }

        getPageData().catch();
    }, [id, router.isReady]);
    return (
        <>

            {dataResponse?.map((project) => {
                    return (

                        <Stack
                        direction={"row"}
                        className={styles.upperBox} key={project.id}>
                            <Box>

                                <Typography variant="h3">{project.name}</Typography>
                                <Typography>{project.note}</Typography>
                                <Typography><strong>Budget: </strong>{currency(project.budget)}</Typography>
                                <Typography><strong>Deadline: </strong>{date(project.deadline)}</Typography>

                            </Box>
                            <Box>
                                <Progress value={percentage(project.budget, project.amount)} size={"10rem"} color={"contrast"}/>
                            </Box>
                        </Stack>

                    )
                }
            )}
        </>
    )
}