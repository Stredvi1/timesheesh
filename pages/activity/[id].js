import {useRouter} from "next/router";
import Details from "../../loaders/loadActivityDetails";
import styles from "../../styles/Home.module.css";


export default function Activity() {

    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <div className={styles.wrapper}>
                <Details id={id}/>
            </div>
        </>
    )
}