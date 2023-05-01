import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import {Typography} from "@mui/material";

export default function FloatingActionButtonSize({url, name}) {
    console.log(url, name);
    return (

       <Link href={url}>
            <Fab size="large" color="secondary" aria-label="add" variant="extended">
                <AddIcon />
                <Typography>
                    {`Přidat ${name}`}
                </Typography>
            </Fab>
       </Link>

    );
}