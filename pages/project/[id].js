import styles from "../../styles/Home.module.css";
import Details from "../../loaders/loadProjectDetails";
import details1 from "../../loaders/loadProjectDetails1";
import Activities from "../../loaders/loadProjectActivities";
import AddButton from "../../components/addButton";
import RemoveButton from "../../components/removeButton";
import {useSession} from "next-auth/react";
import {Conditional} from "@/utils/Conditional";
import {Box, Stack, Typography} from "@mui/material";
import currency from "@/utils/formatters/currencyFormatter";
import date from "@/utils/formatters/dateTimeFormatter";
import Progress from "@/components/progressCircle";
import percentage from "@/utils/percentage";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default function ProjectDetails() {

    const {data: session, status} = useSession();

    const details = details1();


    return (
        <>
            <div className={styles.wrapper}>
                {details?.map((project) => {
                        return (

                            <Stack
                                direction={"row"}
                                className={styles.upperBox}
                                key={project.id}
                                alignItems={"center"}
                                sx={{
                                    position: 'relative'
                                }}>
                                <Box>

                                    <Typography variant="h3">{project.name}</Typography>
                                    <Typography><strong>Budget: </strong>{currency(project.budget)}</Typography>
                                    <Typography><strong>Odpracováno: </strong>{currency(project.amount)}</Typography>
                                    <Typography><strong>Deadline: </strong>{date(project.deadline)}</Typography>
                                    <Typography><strong>Počet aktivit: </strong>{project.activityCount}</Typography>
                                    <Typography><i>{project.note}</i></Typography>

                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        right: '5rem'
                                    }}>
                                    <Progress value={percentage(project.budget, project.amount)} size={"10rem"} color={"primary"} textColor={"text.contrast"}/>
                                </Box>
                            </Stack>

                        )
                    }
                )}

                   <Activities/>
                <Conditional showWhen={session?.user.role !== 4}>
                    <AddButton url={"/newActivity"} name={"Aktivitu"} useId={true}/>
                    <AddButton url={"/addWatcher"} name={"Sledujícího"} useId={true} x={(theme) => theme.spacing(32)}/>
                    <RemoveButton remove={"project"} textOnly={false} x={(theme) => theme.spacing(60)}/>
                </Conditional>

            </div>

        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getServerSession(
                context.req,
                context.res,
                authOptions
            ),
        },
    }
}