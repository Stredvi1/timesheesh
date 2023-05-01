import {Stack, Typography} from "@mui/material";

export default function Text({text}) {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{m: 6}}
        >
            <Typography type="overline" sx={{color: "#bababa"}}>Nic tu není, přidejte {text}</Typography>
        </Stack>
    )
}