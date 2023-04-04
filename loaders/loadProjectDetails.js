import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Typography, Box} from "@mui/material";
import styles from "../styles/Home.module.css";
import date from "../formatters/dateTimeFormatter";
import currency from "../formatters/currencyFormatter";


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
            const res = await response.json();

            setDataResponse(res.projects);
        }

        console.log("Project ", id);

        getPageData().catch();
    }, [id, router.isReady]);
    return (
        <>

            {dataResponse?.map((project) => {
                    return (

                        <Box className={styles.upperBox} key={project.id}>

                            <Typography variant="h3">{project.name}</Typography>
                            <Typography>{project.note}</Typography>
                            <Typography><strong>Budget: </strong>{currency(project.budget)}</Typography>
                            <Typography><strong>Deadline: </strong>{date(project.deadline)}</Typography>


                        </Box>
                    )
                }
            )}
        </>
    )
}