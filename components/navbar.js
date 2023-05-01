import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {LoupeOutlined} from '@mui/icons-material/';
import Link from "next/link";
import {useSession} from "next-auth/react";


export default function ButtonAppBar() {
    const {data:session} = useSession();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <LoupeOutlined/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        TimeShift
                    </Typography>
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