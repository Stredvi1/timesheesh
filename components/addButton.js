import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import {Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function addButton({url, name, useId, x, y}) {

    if(x == null) {
        x = (theme) => theme.spacing(6);
    }
    if(y == null) {
        y = (theme) => theme.spacing(18);
    }

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
                         bottom: y,
                         right: x
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
                         bottom: y,
                         right: x
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