import {useRouter} from "next/router";
import Details from "../../loaders/loadActivityDetails";
import details1 from "../../loaders/loadActivityDetails1";
import styles from "../../styles/Home.module.css";
import AddRecord from "/components/forms/recordForm";
import {Box, Stack, Typography} from "@mui/material";
import Records from "../../loaders/loadRecords";
import {useSession} from "next-auth/react";
import {Conditional} from "@/utils/Conditional";
import time from "@/utils/formatters/worktimeFormatter";
import currency from "@/utils/formatters/currencyFormatter";
import Progress from "@/components/progressCircle";
import percentage from "@/utils/percentage";


export default function Activity() {

    const {data: session, status} = useSession();

    const details = details1();

    // function check() {
    //     if (!details[0]?.assignedUsers.includes(session?.user.id)) {
    //         return "";
    //     }
    // }
    //
    //
    // if(session?.user.role !== 1) {
    //     check();
    // }

    return (
        <>
            <div className={styles.wrapper}>

                {details?.map((activity) => {
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


                <Stack
                    direction={"row"}>
                    <Records/>

                    <Conditional showWhen={status !== 'loading' && details[0]?.tUserID === session?.user.id && session?.user.role !== 4}>
                        <AddRecord/>
                    </Conditional>

                </Stack>
            </div>
        </>
    )
}