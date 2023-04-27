import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box, Button, Typography} from "@mui/material";
import time from "../formatters/worktimeFormatter";
import Link from "next/link";


export default function ActivityCard(activity) {
    const ActivityCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#edf4fc',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: theme.palette.text.contrastText,
        width: '20%',
    }));

    return (
        <ActivityCard>
            <Typography variant="h4" color="primary">{activity.name}</Typography>
            <Box sx={{pb: 2, pt: 1}}>
                <Typography><strong>Přiřazeno: </strong>{activity.fullName}</Typography>
                <Typography><strong>Časofond: </strong>{time(activity.timefund)}</Typography>
                <Typography><strong>Odpracováno: </strong>{time(activity.workingTime)}</Typography>
            </Box>

            <Link href="./overview">
                <Button variant="contained">Detail</Button>
            </Link>
        </ActivityCard>
    )
}
