import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Details from "../../loaders/loadProjectDetails";
import Activities from "../../loaders/loadProjectActivities";
import {Stack} from '@mui/material';


export default function ProjectDetails() {

    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <div className={styles.wrapper}>
                <Details id={id}/>

                <Stack flexWrap spacing={4} direction="row">
                    <Activities id={id}/>
                </Stack>
            </div>
        </>
    )
}