import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Typography, Box} from "@mui/material";
import styles from "../styles/Home.module.css";
import Date from "../formatters/dateTimeFormatter";
import Currency from "../formatters/currencyFormatter";


export default function load(props) {
    const router = useRouter();
    // props.id = router.query;
    console.log(props.id);
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getProjectData-lib`;
            const postData = {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: props.id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.projects);
        }

        getPageData();
    }, [props.id, router.isReady]);
    return (
        <>

            {dataResponse?.map((project) => {
                    return (

                        <Box className={styles.upperBox} key={props.id}>

                            <Typography variant="h3">{project.name}</Typography>
                            <Typography>{project.note}</Typography>
                            <Typography><strong>Budget: </strong><Currency string={project.budget}/></Typography>
                            <Typography><strong>Deadline: </strong><Date string={project.deadline}/></Typography>


                        </Box>
                    )
                }
            )}
        </>
    )
}