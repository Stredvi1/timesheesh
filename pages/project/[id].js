import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Details from "../../loaders/loadProjectDetails";
import Activities from "../../loaders/loadProjectActivities";
import {Stack} from '@mui/material';
import AddActivity from "../../components/addButton";

export default function ProjectDetails() {
    return (
        <>
            <div className={styles.wrapper}>
                <Details/>

                <Stack flexWrap spacing={4} sx={{ p: 6 }} direction="row">
                   <Activities/>
                </Stack>

                <AddActivity url={"/newActivity"} name={"Aktivitu"}/>

            </div>
        </>
    )
}