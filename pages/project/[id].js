import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Details from "../../loaders/loadProjectDetails";
import Activities from "../../loaders/loadProjectActivities";
import AddActivity from "../../components/addButton";
import {useSession} from "next-auth/react";

export default function ProjectDetails() {

    const {data: session, status} = useSession();

    return (
        <>
            <div className={styles.wrapper}>
                <Details/>
                   <Activities/>
                {session?.user.role !== 4 && <AddActivity url={"/newActivity"} name={"Aktivitu"} useId={true}/>}
            </div>
        </>
    )
}