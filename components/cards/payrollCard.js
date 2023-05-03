import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Stack, Typography} from "@mui/material";
import React from "react";


export default function PayrollCard() {

    const PayrollCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '100%',
    }));

    return (

            <PayrollCard>
                <Stack
                    direction="column"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    margin={4}
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}>
                    <Typography variant="h4">Výplatní páska</Typography>
                </Stack>
            </PayrollCard>
    )
}
