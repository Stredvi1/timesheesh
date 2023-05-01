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


                   <Activities/>

                <AddActivity url={"/newActivity"} name={"Aktivitu"}/>

            </div>
        </>
    )
}