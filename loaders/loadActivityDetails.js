import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Typography, Box} from "@mui/material";
import styles from "../styles/Home.module.css";
import Date from "../formatters/dateTimeFormatter";
import Currency from "../formatters/currencyFormatter";
import Time from "../formatters/worktimeFormatter";


export default function load(props) {
    const router = useRouter();
    console.log(props.id);
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getActivityData-lib`;
            const postData = {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: props.id,
                })
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();

            setDataResponse(res.activity);
        }

        getPageData();
    }, [props.id, router.isReady]);
    return (
        <>

            {dataResponse?.map((activity) => {
                    return (

                        <Box className={styles.upperBox} key={props.id}>

                            <Typography variant="h3">{activity.name}</Typography>
                            <Typography variant="overline">Projekt: {activity.projectName}</Typography>
                            <Typography>{activity.note}</Typography>

                            <Typography><strong>Přiřazeno: </strong> {activity.fullName}</Typography>
                            <Typography><strong>Časofond: </strong> <Time string={activity.timefund}/></Typography>
                            <Typography><strong>Odpracováno: </strong> <Time string={activity.workingTime}/></Typography>
                            <Typography><strong>Hodinová sazba: </strong> <Currency string={activity.hourRate}/></Typography>

                        </Box>
                    )
                }
            )}
        </>
    )
}