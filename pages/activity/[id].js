import {useRouter} from "next/router";
import Details from "../../loaders/loadActivityDetails";
import styles from "../../styles/Home.module.css";


export default function Activity() {


    return (
        <>
            <div className={styles.wrapper}>
                <Details/>
            </div>
        </>
    )
}