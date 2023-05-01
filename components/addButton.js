import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import {Typography} from "@mui/material";

export default function FloatingActionButtonSize({url, name}) {
    return (

       <Link href={url}>
            <Fab size="large"
                 color="secondary"
                 aria-label="add"
                 variant="extended"
                 sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(18),
                right: (theme) => theme.spacing(6)
            }}>
                <AddIcon />
                <Typography>
                    {`Přidat ${name}`}
                </Typography>
            </Fab>
       </Link>

    );
}