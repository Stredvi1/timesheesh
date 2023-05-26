"use client"
import {useFormik} from "formik";
import {
    Stack,
    Paper,
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    Alert,
    IconButton,
    AlertTitle, Snackbar
} from "@mui/material";
import React from "react";
import {WatcherScheme} from "./schemas/watcherSchema";
import Watchers from "@/loaders/loadWatchers";
import addWatcher from "../../posters/postNewWatcher";
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {useSearchParams} from "next/navigation";


export default function WatcherForm() {

    const [error, setError] = React.useState(false);
    const router = useRouter();
    const search = useSearchParams();
    const id = search.get('id');

    const watchers = Watchers();


    const formik = useFormik({
        initialValues: {
            watcher: '',
        },
        validationSchema: WatcherScheme,
        onSubmit: async (values) => {
            await handleSubmit(values);
        },
    });

    async function handleSubmit(values) {

        values.projectID = parseInt(id);
        console.log(values)
        const res = await addWatcher(values);

        if (res) {
            await router.back();
        } else {
            setError(true);
        }
    }


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column"
                       spacing={6}
                       justifyContent="center"
                       alignItems="center"
                       margin={4}>
                    <Paper elevation={3}>
                        <Box padding={4}>
                            <Stack
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center">
                                <Typography variant="h4">Přidat sledujícího</Typography>

                                <Stack direction="row" spacing={2} sx={{width: 500, maxWidth: '100%',}}>
                                    <TextField
                                        fullWidth
                                        id="watcher"
                                        select
                                        label="Sledující"
                                        defaultValue=""
                                        required
                                        {...formik.getFieldProps('watcher')}
                                        error={formik.touched.watcher && Boolean(formik.errors.watcher)}
                                        helperText={formik.touched.watcher && formik.errors.watcher}
                                    >
                                        {watchers?.map((watcher) => {
                                            return (
                                                <MenuItem
                                                    id={watcher.id}
                                                    key={watcher.id}
                                                    value={watcher.id}
                                                >
                                                    {watcher.fullName}
                                                </MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </Stack>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
                <Stack direction="column" spacing={2} padding={2} alignItems="center">
                    <Button variant="text" onClick={router.back}>Zrušit</Button>
                    <Button variant="contained" type="submit">Přidat</Button>
                </Stack>
            </form>

            <Snackbar
                open={error}
                autoHideDuration={6000}
            >
                <Alert
                    severity="error"
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setError(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                    sx={{mb: 2}}
                >
                    <AlertTitle>Chyba</AlertTitle>
                    Nastala neočekávaná chyba v databázi
                </Alert>
            </Snackbar>
        </>
    )
}
