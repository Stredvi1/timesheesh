"use client"
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Delete';
import {Typography} from "@mui/material";
import {useRouter} from "next/router";
import removeProject from "/posters/deleteProject";
import removeActivity from "/posters/deleteActivity";
import removeRecord from "/posters/deleteRecord";
import Link from '@mui/material/Link';


export default function removeButton({remove, textOnly, recordID, x, y}) {

    if(textOnly == null) {
        textOnly = false;
    }

    if(x == null) {
        x = (theme) => theme.spacing(6);
    }
    if(y == null) {
        y = (theme) => theme.spacing(18);
    }

        const router = useRouter();
        const id = router.query;


        async function action() {
            let res;
            if(remove === "project") {
                res = await removeProject(id);

            }
            if (remove === "activity") {
                res = await removeActivity(id);
            }
            if(remove === "record") {
                res = await removeRecord(recordID);
            }

            if (res && !textOnly) {
                await router.back();
            } else if(res && textOnly) {
                await router.reload();
            } else {
                console.log(res);
            }

        }

    if(!textOnly) {
        return (
            <Fab size="large"
                 color="red"
                 aria-label="add"
                 variant="extended"
                 sx={{
                     position: "fixed",
                     bottom: y,
                     right: x
                 }}
                 onClick={async () => {await action();}}>
                <RemoveIcon/>
                <Typography>
                    Odstranit
                </Typography>
            </Fab>

        );
    } else {
        return (
            <Link color="secondary" href="#" onClick={async () => {await action();}}>Odstranit</Link>
        )
    }

}