import {useRouter} from "next/router";
import Details from "../../loaders/loadActivityDetails";
import styles from "../../styles/Home.module.css";
import AddRecord from "/components/recordForm";
import Records from "../../loaders/loadRecords";
import {Stack} from '@mui/material';


export default function Activity() {


    return (
        <>
            <div className={styles.wrapper}>
                <Details/>
                <div style={{display: 'flex', flexDirection: 'row',  width: '100%'}}>
                    <Stack flexWrap spacing={4} sx={{p: 6, width: '100%'}} direction="row" >
                        <Records/>
                    </Stack>
                    <div style={{width: 'fit-content', right: 0, position: "fixed"}}>
                    <AddRecord/>
                    </div>
                </div>
            </div>
        </>
    )
}