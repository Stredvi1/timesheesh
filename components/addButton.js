import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import {Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function addButton({url, name, useId}) {

    if (useId) {

        const router = useRouter();
        const id = router.query;

        return (

            <Link href={{pathname: url, query: {id: id["id"]}}}>
                <Fab size="large"
                     color="secondary"
                     aria-label="add"
                     variant="extended"
                     sx={{
                         position: "fixed",
                         bottom: (theme) => theme.spacing(18),
                         right: (theme) => theme.spacing(6)
                     }}>
                    <AddIcon/>
                    <Typography>
                        {`Přidat ${name}`}
                    </Typography>
                </Fab>
            </Link>

        );
    } else {
        return (
            <Link href={{pathname: url}}>
                <Fab size="large"
                     color="secondary"
                     aria-label="add"
                     variant="extended"
                     sx={{
                         position: "fixed",
                         bottom: (theme) => theme.spacing(18),
                         right: (theme) => theme.spacing(6)
                     }}>
                    <AddIcon/>
                    <Typography>
                        {`Přidat ${name}`}
                    </Typography>
                </Fab>
            </Link>
        )
    }
}