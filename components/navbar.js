import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {LoupeOutlined, HomeOutlined, ArrowBack} from '@mui/icons-material/';
import Link from "next/link";
import {useSession} from "next-auth/react";
import {IconButton, Stack} from "@mui/material";
import {useRouter} from "next/router";


export default function ButtonAppBar() {
    const {data: session} = useSession();
    const router = useRouter();

    function home() {

        if (router.pathname !== "/overview") {
            router.push("/overview");
        }
    }

    function back() {
        router.back();
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Stack
                        direction="row"
                        spacing={2}
                        component="div" sx={{flexGrow: 1}}
                        alignItems="center">
                        <Box
                            sx={{ display: 'flex' }}>
                            <LoupeOutlined/>
                            <Typography variant="h6">
                                TimeShift
                            </Typography>
                        </Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => {
                                back();
                            }}>
                            <ArrowBack/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => {
                                home();
                            }}>
                            <HomeOutlined/>
                        </IconButton>
                    </Stack>
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