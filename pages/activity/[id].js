import {useRouter} from "next/router";
import Details from "../../loaders/loadActivityDetails";
import styles from "../../styles/Home.module.css";
import AddRecord from "/components/forms/recordForm";
import {Stack} from "@mui/material";
import Records from "../../loaders/loadRecords";
import {useSession} from "next-auth/react";
import {Conditional} from "@/utils/Conditional";


export default function Activity() {

    const {data: session, status} = useSession();

    return (
        <>
            <div className={styles.wrapper}>
                <Details/>
                <Stack
                    direction={"row"}>
                    <Records/>

                    <Conditional showWhen={session?.user.role !== 4}>
                        <AddRecord/>
                    </Conditional>

                </Stack>
            </div>
        </>
    )
}