import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {LoupeOutlined, HomeOutlined} from '@mui/icons-material/';
import Link from "next/link";
import {useSession} from "next-auth/react";
import {IconButton} from "@mui/material";
import {useRouter} from "next/router";


export default function ButtonAppBar() {
    const {data:session} = useSession();
    const router = useRouter();

    function home() {
        // if(router.pathname !=== "/overview") {
        //      // router.push("/overview")
        // }
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={home()}>
                        <HomeOutlined sx={{align: "center"}}/>
                    </IconButton>

                    <LoupeOutlined/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        TimeShift
                    </Typography>
                    <Link href='/overview' >
                    </Link>
                    <Link href='/newUser'>
                        <Button color="inherit">Přidat uživatele</Button>
                    </Link>
                    <Link href='/'>
                        <Button color="inherit">Odhlášení</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}